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

    console.log("Username", username);
    console.log("Password", password);

    // Clear the form
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <div style={styles.headingContainer}>
            <h1 style={styles.heading}>CLINIC</h1>
            <div style={styles.line}></div> {/* Black line under the heading */}
            <h3>Something for decoration</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
                Username
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
                Password
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
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "90vh",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  container: {
    padding: "0px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    maxWidth: "400px",
    width: "100%",
    zIndex: 1,
  },
  formWrapper: {
    padding: "50px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: "40px",
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
  button: {
    marginTop: "150px", 
    padding: "10px 15px",
    background: "linear-gradient(to right, #2CD8, #C5C1FF)",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    width: "70%",
    margin: "0 auto",
    display: "block",
    fontWeight: "bold",
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
    // marginBottom: "70px",
  },
};

export default LogIn;
