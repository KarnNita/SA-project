import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { useNavigate } from "@remix-run/react";

function AddNewPatient() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    birthday: "",
    gender: "",
    appointmentDate: "",
    course: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { tel, birthday, course } = formData;

    const telRegex = /^\d{10}$/;
    if (!telRegex.test(tel)) {
      setError("Telephone number must be 10 digits.");
      return false;
    }

    const birthDate = new Date(birthday);
    const today = new Date();
    if (birthDate > today) {
      setError("Birthday cannot be in the future.");
      return false;
    }

    if (parseInt(course) < 0) {
      setError("Course count cannot be negative.");
      return false;
    }

    if (isNaN(parseInt(course))) {
      setError("Course count must be a valid number.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {name, tel, birthday, gender, appointmentDate, course } = formData;

    if (!name || !tel || !birthday || !gender || !appointmentDate || !course) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      tel: "",
      birthday: "",
      gender: "",
      appointmentDate: "",
      course: "",
    });
    setError("");
    navigate('/PatientDetail');
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit({
      preventDefault: () => {}, 
    } as FormEvent<HTMLFormElement>);
  };

  return (
    <div className="flex flex-row w-[78svw]">
      <div className="flex flex-row justify-center items-start w-[75svw] h-screen pt-10 pb-7 ">
        <div className="p-6 border border-gray-300 h-[90svh] rounded-3xl bg-white shadow-lg w-[40svw]">

          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-[#1FA1AF] text-2xl">Add New Patient</h1>
            <div className="flex flex-row items-center"></div>
          </div>

          <form>

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
              <label htmlFor="appointmentDate" className="block mb-1">Appointment Date & Time:</label>
              <input
                type="datetime-local"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="course" className="block mb-1">Course:</label>
              <input
                type="number"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
              onClick={handleButtonClick}
              className="absolute right-28 bottom-9 transform -translate-y-1/2 w-36 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg"
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
