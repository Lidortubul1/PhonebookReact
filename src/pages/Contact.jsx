import { useState } from "react";
// import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ההודעה נשלחה בהצלחה!\n(כרגע רק סימולציה 😄)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>צור קשר</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="נושא"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="תוכן ההודעה"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">שלח</button>
      </form>
    </div>
  );
}
