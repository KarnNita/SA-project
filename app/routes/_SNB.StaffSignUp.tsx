import React, { useState } from "react";
import { useNavigate } from "@remix-run/react";


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
  const navigate = useNavigate(); 


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
    navigate('/StaffListView')
  };

  return (
    <div className="flex flex-row w-[78svw]">
      <div className="flex flex-row justify-center items-start w-[75svw] pt-10 pb-7">
        <div className="p-6 border border-gray-300 h-[115svh] rounded-3xl bg-white shadow-lg w-[40svw]">

          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-[#1FA1AF] text-2xl">Sign up new staff</h1>
            <div className="flex flex-row items-center">
            </div>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">Username:</label>
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
              <label htmlFor="name" className="block mb-1">Name:</label>
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
              <label htmlFor="tel" className="block mb-1">Telephone:</label>
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
              <label htmlFor="birthday" className="block mb-1">Birthday:</label>
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
              <label htmlFor="gender" className="block mb-1">Gender:</label>
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
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="block mb-1">Role:</label>
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
              <label htmlFor="email" className="block mb-1">Email:</label>
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
              <label htmlFor="password" className="block mb-1">Password:</label>
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
              <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
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

            <button
              type="button"
              onClick={handleSubmit}
              className="absolute right-28 top-[115%] transform -translate-y-1/2 w-36 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
