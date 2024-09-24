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
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.heading}>Add new Patient</h1>
        <form onSubmit={handleSubmit}>
          {/* ... remaining form fields ... */}
        </form>
      </div>
      <button type="button" onClick={handleButtonClick} style={styles.saveButton}>
        Save
      </button>
    </div>
  );
}

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

export default AddNewPatient;
