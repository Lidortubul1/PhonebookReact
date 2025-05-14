import { useState } from "react";
import classes from "./form.module.css";

export default function Form() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
  });

  // Destructure form data for easier access
  const { firstName, lastName } = formData;

  /**
   * Handle form changes
   */
  function handleChange(event) {
    const { name, value } = event.target;
    // validate input and then set the state...

    // Clear any existing errors for this field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Check for invalid characters (non-letters)
    if (value && !/^[A-Za-z]*$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter letters only",
      }));
    }

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  /**
   * Submit form
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Check for errors before submitting
    if (errors.firstName || errors.lastName) {
      return; // Don't submit if there are errors
    }

    // Send form data to server using fetch
    // TODO: Replace with actual API endpoint
    fetch("https://api.example.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // Handle successful response here
        // For example, show success message or redirect
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
        // For example, show error message to user
      });
  }

  return (
    <main className={classes.main}>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputGroup}>
          <input
            type="text"
            value={firstName}
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            pattern="[A-Za-z]+"
            title="Please enter letters only"
            required
          />
          {errors.firstName && (
            <p className={classes.errorMessage}>{errors.firstName}</p>
          )}
        </div>

        <div className={classes.inputGroup}>
          <input
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            pattern="[A-Za-z]+"
            title="Please enter letters only"
            // required
          />
          {errors.lastName && (
            <p className={classes.errorMessage}>{errors.lastName}</p>
          )}
        </div>

        {/**
         * Other useful form elements:
         *
         *  <textarea /> element
         *  <input type="checkbox" />
         *  <input type="radio" />
         *  <select> and <option> elements
         */}

        <button>Submit</button>
      </form>

      <hr className={classes.divider} />

      {(firstName || lastName) && (
        <div className={classes.formSummary}>
          <p>
            {firstName} {lastName}
          </p>
        </div>
      )}
    </main>
  );
}
