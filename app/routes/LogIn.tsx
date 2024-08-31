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
    <div className="flex justify-center items-center w-[90vw] h-[90vh] bg-gray-100 shadow-lg rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="p-0 bg-gray-100 rounded-lg max-w-sm w-full z-10">
        <div className="p-12 bg-gray-100 rounded-lg">
          <div className="text-center mb-10">
            <h1 className="text-black font-bold text-3xl mb-2">CLINIC</h1>
            <div className="w-full h-0.5 bg-black mb-2"></div>
            <h3>Something for decoration</h3>
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

export default LogIn;
