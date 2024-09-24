import React, { useState } from "react";

// Type for the event object
type FormEvent = React.FormEvent<HTMLFormElement>;

function LogIn() {
<<<<<<< HEAD
  // State to store form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = (event: FormEvent) => {
=======
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
    event.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

<<<<<<< HEAD
    // Here you can add the logic to authenticate the user
    console.log("Email:", email);
    console.log("Password:", password);
=======
    console.log("Username", username);
    console.log("Password", password);
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825

    // Clear the form
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="flex justify-center items-center w-[90vw] h-[90vh] bg-gray-100 shadow-lg rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="p-0 bg-gray-100 rounded-lg max-w-sm w-full z-10">
        <div className="p-12 bg-gray-100 rounded-lg">
          <div className="text-center mb-10">
            <h1 className="text-black font-bold text-3xl mb-2">CLINIC</h1>
            <div className="w-full h-0.5 bg-black mb-2"></div>
            <h3>Something for decoration</h3>
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="mt-10 py-2 px-3 bg-gradient-to-r from-[#2CD8] to-[#C5C1FF] text-white font-bold rounded-lg w-[70%] mx-auto block"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
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

=======
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
export default LogIn;
