import React, { useState, CSSProperties } from 'react';

// สไตล์ในแบบ inline
const styles: { [key: string]: CSSProperties } = {
  patientDetailContainer: {
    display: 'flex',
    backgroundColor: '#DCE8E9',
    height: '100vh',
  },
  sidebar: {
    width: '15%',
    backgroundColor: '#2F919C',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
  },
  mainContent: {
    width: '55%',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '25px',
    margin: '55px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  },
  button: {
    backgroundColor: '#2F919C',
    fontSize: '18px',
    color: 'white',
    border: 'none',
    padding: '10px 40px',
    cursor: 'pointer',
    borderRadius: '5px',
    position: 'absolute',
    bottom: '55px',
    right: '150px',
  },
  input: {
    width: '700px',
    padding: '8px',
    borderRadius: '10px',
    border: '1px solid white',
    backgroundColor: '#e0e0e0',
  },
};

// คอมโพเนนต์ EditPatient
const EditPatient: React.FC = () => {
  const [patient, setPatient] = useState({
    name: '',
    patientID: '',
    appointmentDate: '',
    age: '',
    gender: '',
    tel: '',
    course: '',
  });

  const handleSave = () => {
    console.log("Patient data saved!", patient);
  };

  return (
    <div style={styles.patientDetailContainer}>
      <button style={styles.button} onClick={handleSave}>Save</button>
      
      <div style={styles.sidebar}>
        <h3>Clinic Application</h3>
        <ul>
          <li>Home Menu</li>
          <li>Staff List</li>
          <li>Add new patient</li>
          <li>Equipment</li>
        </ul>
        <button style={{ backgroundColor: 'white', color: '#256d7b', padding: '10px', borderRadius: '8px' }}>LOG OUT</button>
      </div>

      <div style={styles.mainContent}>
        <div className="edit-column">
          <h1 className="left-text">Edit Patient</h1>
        </div>

        <div className="circle-decoration"></div>

        <div className="patient-info">
          <div className="patient-details">
            <div className="detail-column">
              <div className="detail-row">
                <label>Patient ID:</label>
                <input type="text" value={patient.patientID} style={styles.input} readOnly />
              </div>

              <div className="detail-row">
                <label>Name:</label>
                <input type="text" value={patient.name} style={styles.input} readOnly />
              </div>

              <div className="detail-row">
                <label>Tel:</label>
                <input type="text" value={patient.tel} style={styles.input} readOnly />
              </div>

              <div className="detail-row">
                <label>Age:</label>
                <input type="text" value={patient.age} style={styles.input} readOnly />
              </div>

              <div className="detail-row">
                <label>Gender:</label>
                <input type="text" value={patient.gender} style={styles.input} readOnly />
              </div>

              <div className="detail-row">
                <label>Appointment Date:</label>
                <input type="text" value={patient.appointmentDate} style={styles.input} readOnly />
              </div>

              <div className="detail-row">
                <label>Course:</label>
                <input type="text" value={patient.course} style={styles.input} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-text">Patient Data</div>

      <div className="note">
        <div className="note-item">
          <span className="note-dot"></span>
          <span className="note-text">New Patient</span>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
