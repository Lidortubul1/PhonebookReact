import { useState } from "react";
import { users } from "../../user";
import classes from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("הסיסמאות אינן תואמות");
      return;
    }

    const user = users.find((u) => u.email === formData.email);
    if (user && user.password === formData.password) {
      onLogin(user);
      navigate('/home');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        onChange={handleChange}
      />
      <label>
        <input type="checkbox" onChange={() => setShowPassword((p) => !p)} />
        הצג סיסמה
      </label>
      <button type="submit">התחבר</button>
    </form>
  );
}
