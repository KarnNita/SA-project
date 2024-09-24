import React, { useState } from "react";

// Type for the event object
type FormEvent = React.FormEvent<HTMLFormElement>;

function LogIn() {
  // State to store form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Here you can add the logic to authenticate the user
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the form
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
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
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f5f5f5", // Light background for contrast
  },
  formWrapper: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional: add some shadow
  },
  input: {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
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
};

export default LogIn;
