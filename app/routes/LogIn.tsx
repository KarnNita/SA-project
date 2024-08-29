import React, { useState } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the form
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.heading}>CLINIC</h1>
        <div style={styles.line}></div> {/* Black line under the heading */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formWrapper: {
    padding: "50px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px", 
    width: "100%",
    // textAlign: "center", // Center the content inside the formWrapper
  },
  input: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    backgroundColor: "#E8E8E8",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  },
  error: {
    color: "red",
  },
  heading: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: "3em",
    marginBottom: "10px", 
  },
  line: {
    width: "100%", 
    height: "2px", 
    backgroundColor: "#000000", 
    marginBottom: "40px", 
  },
};

export default LogIn;
