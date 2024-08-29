import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    tel: "",
    age: "",
    gender: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username,
      name,
      tel,
      age,
      gender,
      role,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      !username ||
      !name ||
      !tel ||
      !age ||
      !gender ||
      !role ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      username: "",
      name: "",
      tel: "",
      age: "",
      gender: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
      <h1 style={styles.heading}>Sign up new staff</h1>
      <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="tel">Telephone:</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select Role</option>
              <option value="Staff">Staff</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

        </form>
      </div>

      {/* Save button positioned to the right of the form box */}
      <button type="button" onClick={handleSubmit} style={styles.saveButton}>
        Save
      </button>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "80vh",
    paddingTop: "50px",
    paddingBottom: "820px",
    backgroundColor: "#f5f5f5",
  },
  formWrapper: {
    padding: "20px",
    paddingBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
    position: "relative",
  },
  formGroup: {
    marginBottom: "15px", 
  },
  input: {
    width: "100%",
    paddingTop: "8px",
    padding: "8px", 
    boxSizing: "border-box",
    backgroundColor: "#D6D6D6",
    fontSize: "0.8em", 
    borderRadius: "10px",
  },

  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#2F919C",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    position: "absolute",
    right: "130px",
    top: "105%",
    transform: "translateY(-50%)",
    width: "150px",
  },
  error: {
    color: "red",
  },
  heading: {
    color: "#2F919C",
    fontWeight: "bold",
    fontSize: "1.5em",
    marginBottom: "20px", 
  },

};

export default SignUp;
