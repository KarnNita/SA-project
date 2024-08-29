import React, { useState } from "react";

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

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.heading}>Add new Patient</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="patientId">Patient ID:</label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="tel">Telephone:</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="course">Course:</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>

      {/* Save button positioned to the right of the form box */}
      <button type="button" onClick={handleSubmit} style={styles.saveButton}>
        Save
      </button>
    </div>
  );
}

// Styles
const styles = {
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

export default AddNewPatient;
