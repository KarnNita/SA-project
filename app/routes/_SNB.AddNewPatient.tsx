import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { useNavigate } from "@remix-run/react";

function AddNewPatient() {
  const [formData, setFormData] = useState({
    name_surname: "",
    phone_number: "",
    birthday: "",
    gender: "",
    appointment_date: "",
    course_count: 0,
    first_visit_date: new Date().toISOString().slice(0, 10),
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { phone_number, birthday, course_count } = formData;
    const telRegex = /^\d{10}$/;

    if (!telRegex.test(phone_number)) {
      setError("Telephone number must be 10 digits.");
      return false;
    }

    const birthDate = new Date(birthday);
    const today = new Date();
    if (birthDate > today) {
      setError("Birthday cannot be in the future.");
      return false;
    }

    if (course_count < 0) {
      setError("Course count cannot be negative.");
      return false;
    }

    if (isNaN(course_count)) {
      setError("Course count must be a valid number.");
      return false;
    }

    return true;
  };

  const submitToApi = async () => {
    try {
      formData.appointment_date = new Date(formData.appointment_date).toISOString();
      const response = await fetch("https://dinosaur.prakasitj.com/patient/addPatient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Full error response:", errorData); // Log the complete error data
        setError(errorData.message || "Failed to add patient data.");
        return;
      }
  
      navigate("/listViewPatient");
    } catch (err) {
      setError("Error submitting data. Please try again.");
      console.error("Request error:", err); // Log any request-related errors
    }
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    submitToApi(); // Call the function to send data to the API
  };

  return (
    <div className="flex flex-row w-[78svw]">
      <div className="flex flex-row justify-center items-start w-[75svw] h-screen pt-10 pb-7 ">
        <div className="p-6 border border-gray-300 h-[90svh] rounded-3xl bg-white shadow-lg w-[40svw]">
          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-[#1FA1AF] text-2xl">Add New Patient</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name_surname" className="block mb-1">
                Name Surname:
              </label>
              <input
                type="text"
                id="name_surname"
                name="name_surname"
                value={formData.name_surname}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone_number" className="block mb-1">
                Telephone:
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="appointment_date" className="block mb-1">
                Appointment Date & Time:
              </label>
              <input
                type="datetime-local"
                id="appointment_date"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="course_count" className="block mb-1">
                Course:
              </label>
              <input
                type="number"
                id="course_count"
                name="course_count"
                value={formData.course_count}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-36 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewPatient;
