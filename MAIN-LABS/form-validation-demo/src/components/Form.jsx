import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Form Validation Demo</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name */}
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && (
            <p style={styles.error}>{errors.password}</p>
          )}
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {successMessage && (
        <p style={styles.success}>{successMessage}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
  },

  button: {
    padding: "10px",
    cursor: "pointer",
  },

  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },

  success: {
    color: "green",
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Form;