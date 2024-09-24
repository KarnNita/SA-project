import React, { useState } from "react";

// Type for the event objects
type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;
type MouseEvent = React.MouseEvent<HTMLButtonElement>;

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    tel: "",
    birthday: "",
    gender: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Handle change in form inputs
  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const {
      username,
      name,
      tel,
      birthday,
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
      !birthday ||
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
      birthday: "",
      gender: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

<<<<<<< HEAD
  // Handle button click
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.heading}>Sign up new staff</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={styles.formGroup}>
            <label htmlFor="username">Username:</label>
=======
  const formatBirthday = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="flex justify-center items-start min-height: 0vh; pt-12 pb-12 bg-[#DCE8E9]">
      <div className="p-6 border border-gray-300 rounded-3xl bg-white shadow-lg max-w-lg w-full relative">
        <h1 className="text-[#1FA1AF] font-bold text-xl mb-6">Sign up new staff</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              Username:
            </label>
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tel" className="block mb-1">
              Telephone:
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="birthday" className="block mb-1">
              Birthday:
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block mb-1">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block mb-1">
              Role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            >
              <option value="">Select Role</option>
              <option value="Staff">Staff</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
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

<<<<<<< HEAD
          {error && <p style={styles.error}>{error}</p>}
=======
          {error && <p className="text-red-500">{error}</p>}
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
        </form>

<<<<<<< HEAD
      {/* Save button positioned to the right of the form box */}
      <button type="button" onClick={handleClick} style={styles.saveButton}>
        Save
      </button>
=======
        <button
          type="button"
          onClick={handleSubmit}
          className="absolute right-[-200px] top-[-50] transform -translate-y-1/2 w-36 py-2 bg-[#1FA1AF] text-white font-bold rounded-3xl"
        >
          Save
        </button>

      </div>
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
    </div>
  );
}

<<<<<<< HEAD
// Styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "80vh",
    paddingTop: "50px",
    paddingBottom: "50px", // Adjusted padding to avoid large gap
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

=======
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
export default SignUp;
