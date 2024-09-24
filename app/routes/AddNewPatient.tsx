import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";

function AddNewPatient() {
  const [formData, setFormData] = useState({
    patientId: "",
    name: "",
    tel: "",
    age: "",
    gender: "",
    appointmentDate: "",
    course: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      patientId,
      name,
      tel,
      age,
      gender,
      appointmentDate,
      course,
    } = formData;

    if (
      !patientId ||
      !name ||
      !tel ||
      !age ||
      !gender ||
      !appointmentDate ||
      !course
    ) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      patientId: "",
      name: "",
      tel: "",
      age: "",
      gender: "",
      appointmentDate: "",
      course: "",
    });
    setError("");
  };

  // Wrapper function to call handleSubmit
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit({
      preventDefault: () => {}, // Dummy function to satisfy TypeScript
      // The rest of FormEvent properties are not necessary here
    } as FormEvent<HTMLFormElement>);
  };

  return (
    <div className="flex justify-center items-start h-screen pt-12 pb-24 bg-[#DCE8E9]">
      <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg max-w-lg w-full relative">
        <h1 className="text-[#1FA1AF] font-bold text-xl mb-6">Add new Patient</h1>
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
          {/* ... remaining form fields ... */}
        </form>
      </div>
      <button type="button" onClick={handleButtonClick} style={styles.saveButton}>
=======
          <div className="mb-4">
            <label htmlFor="patientId" className="block mb-1">
              Patient ID:
            </label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={formData.patientId}
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
            <label htmlFor="age" className="block mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
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
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="appointmentDate" className="block mb-1">
              Appointment Date & Time:
            </label>
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
            <label htmlFor="course" className="block mb-1">
              Course:
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-gray-300 text-sm rounded-3xl"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="absolute right-28 top-[93%] transform -translate-y-1/2 w-36 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg"
      >
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
        Save
      </button>
    </div>
  );
}

<<<<<<< HEAD
// Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "80vh",
    paddingTop: "50px",
    paddingBottom: "650px",
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
    paddingTop: "8px",
    padding: "8px",
    boxSizing: "border-box",
    backgroundColor: "#D6D6D6",
    fontSize: "0.8em",
    borderRadius: "10px",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#1FA1AF",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    position: "absolute",
    right: "130px",
    top: "87%",
    transform: "translateY(-50%)",
    width: "150px",
  },
  error: {
    color: "red",
  },
  heading: {
    color: "#1FA1AF",
    fontWeight: "bold",
    fontSize: "1.5em",
    marginBottom: "20px",
  },
};

=======
>>>>>>> a589aa51073d262d5d3220c98a8a888741e95825
export default AddNewPatient;
