import { useState } from "react";
import { useNavigate } from '@remix-run/react';

function EditPatient() {
  const [formData, setFormData] = useState({
    PatientID: "",
    name: "",
    tel: "",
    age: "",
    gender: "",
    appointmentDate: "",
    course: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    alert('Saved.');
    navigate('/PatientDetail');
  };

  return (
    <div className="flex flex-row h-[100svh] bg-[#DCE8E9] overflow-hidden relative">

      {/* พื้นหลัง-Main */}
      <div className="flex flex-col flex-grow bg-white 
                      w-[100svh] ml-[55px] mt-[90px] h-[calc(100svh-170px)]
                      rounded-[37px] border border-gray-300
                      shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-12">

        {/* หัวเรื่อง-Text */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#2F919C] text-3xl">Edit Patient</h1>
        </div>

        {/* แบบฟอร์มแก้ไขผู้ป่วย */}
        <form className="flex flex-col gap-2.5">
          <div>
            <label htmlFor="tel" className="block mb-1 text-lg">Patient ID:</label>
            <input
              type="Patient ID"
              id="Patient ID"
              name="Patient ID"
              value={formData.PatientID}
              onChange={handleChange}
              className="w-[70svh] py-2 px-3 bg-gray-300 text-sm rounded-full"
              required
            />
          </div>

        
          <div>
            <label htmlFor="name" className="block mb-1 text-lg">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[70svh] py-2 px-3 bg-gray-300 text-sm rounded-full"
              required
            />
          </div>

          <div>
            <label htmlFor="tel" className="block mb-1 text-lg">Telephone:</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              className="w-[70svh] py-2 px-3 bg-gray-300 text-sm rounded-full"
              required
            />
          </div>

          <div>
            <label htmlFor="birthday" className="block mb-1 text-lg">Age:</label>
            <input
              type="age"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-[70svh] py-2 px-3 bg-gray-300 text-sm rounded-full"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block mb-1 text-lg">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-[70svh] py-2 pl-3 bg-gray-300 text-sm rounded-full"

              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block mb-1 text-lg">Appointment Date & Time:</label>
            <input
              type="datetime-local"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-[70svh] py-2 px-3 bg-gray-300 text-sm rounded-full"
              required
            />
          </div>

          <div>
            <label htmlFor="course" className="block mb-1 text-lg">Course:</label>
            <input
              type="number"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-[70svh] py-2 px-3 bg-gray-300 text-sm rounded-full"
              required
            />
          </div>
        </form>
      </div>

      {/* ปุ่ม Save */}
      <div className="ml-[8svh] mt-[86.8svh]">
        <button
          onClick={handleSave}
          className="bg-[#2F919C] text-white font-semibold py-2 px-6
                    h-[50px] w-[14svh] rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                    hover:bg-[#236971] transition-all text-xl">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditPatient;
