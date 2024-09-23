import React, { useState } from "react";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
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
      currentPassword,
      newPassword,
      confirmPassword,
    } = formData;

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setError("");
  };

  return (
    <div className="flex justify-center items-start h-screen pt-12 pb-24 bg-[#DCE8E9]">
      <div className="p-6 pb-80 border border-gray-300 rounded-lg bg-white shadow-lg max-w-lg w-full relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#1FA1AF] font-bold text-xl">Change Password</h1>
        <div className="flex items-center">
            <span className="text-[#1FA1AF] font-bold text-xl mr-2">User Name</span>
            <span className="h-2 w-2 bg-[#1FA1AF] rounded-full"></span>
        </div>
    </div>

        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-1">
              Current Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-1">
              New Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
        </form>

        <button
          type="button"
          onClick={handleSubmit}
          className="absolute left-8px bottom-[250px] transform -translate-y-1/2 w-36 py-2 bg-[#FFCE6D] text-black font-bold rounded-lg shadow-lg"
        >
          Save
        </button>

      </div>
    </div>
  );
}

export default ChangePassword;
