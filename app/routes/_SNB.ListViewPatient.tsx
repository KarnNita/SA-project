import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "@remix-run/react";
import { format } from 'date-fns';

interface Patient {
  patient_id: number;
  name_surname: string;
  phone_number: string;
  birthday: string;
  gender: string;
  appoinment_date: number;
  course_count: number;
}

const ListViewPatient: React.FC = () => {
  const navigate = useNavigate();
  const [patientList, setPatientList] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dinosaur.prakasitj.com/patient/getPatientList");

        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }

        const data: Patient[] = await response.json();
        setPatientList(data);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePatientDetail = (patientId: number) => {
    sessionStorage.setItem("currentPatientID", JSON.stringify(patientId));
    navigate("/PatientDetail");
  };

  const handleAddNewPatient = () => {
    navigate("/AddNewPatient");
  };

  const filteredPatients = patientList.filter((patient) =>
    patient.name_surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone_number.includes(searchTerm) ||
    patient.patient_id.toString().includes(searchTerm)
  );

  const formatDate = (timestamp: number | undefined): string => {
    if (!timestamp) return "N/A";  
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} (${hours}:${minutes}:${seconds})`;
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex">
      <div className="page-background" style={mainContentStyle}>
        <div className="patient-list-view-container" style={patientListViewContainerStyle}>
          <div className="header" style={headerStyle}>
            <h2 style={{ fontSize: "28px", color: "#2F919C" }}>List View Patient</h2>
            <div style={addNewPatientButtonStyle} onClick={handleAddNewPatient}>
              <div style={iconContainerStyle}>
                <FontAwesomeIcon icon={faUserPlus} style={{ color: "#000" }} />
              </div>
              <span style={{ color: "#000000", fontSize: "16px" }}>Add new Patient</span>
            </div>
          </div>

          <div className="search-bar" style={searchBarStyle}>
            <input
              type="text"
              placeholder="searching..."
              value={searchTerm}
              onChange={handleSearch}
              style={searchInputStyle}
            />
          </div>

          <div className="patient-list" style={patientListStyle}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Patient ID</th>
                  <th style={thTdStyle}>Name Surname</th>
                  <th style={thTdStyle}>Phone Number</th>
                  <th style={thTdStyle}>Birthday</th>
                  <th style={thTdStyle}>Gender</th>
                  <th style={thTdStyle}>Appointment Date</th>
                  <th style={thTdStyle}>Course</th>
                  <th style={thTdStyle}></th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.patient_id} style={{ borderBottom: "1px solid white", cursor: "pointer" }}>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}>{patient.patient_id}</td>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}>{patient.name_surname}</td>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}>{patient.phone_number}</td>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}>{format(new Date(patient.birthday), 'dd-MM-yyyy')}</td>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}>{patient.gender}</td>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}> {formatDate(patient.appoinment_date) }</td>
                    <td style={thTdStyle} onClick={() => handlePatientDetail(patient.patient_id)}>{patient.course_count}</td>
                    <td style={thTdStyle}>
                      <button style={buttonStyle} onClick={() => navigate("/treatmentSelect")}>
                        Select Treatment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component styles
const mainContentStyle: React.CSSProperties = {
  backgroundColor: "#DCE8E9",
  width: "100%",
  minHeight: "100vh",
  padding: "50px",
  boxSizing: "border-box",
};

const patientListViewContainerStyle: React.CSSProperties = {
  width: "1120px",
  height: "850px",
  padding: "30px",
  backgroundColor: "#ffffff",
  borderRadius: "50px 5px 5px 50px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  margin: "auto",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const addNewPatientButtonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};

const iconContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  borderRadius: "50%",
  backgroundColor: "#f0c040",
};

const searchBarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "20px",
};

const searchInputStyle: React.CSSProperties = {
  width: "300px",
  padding: "10px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const patientListStyle: React.CSSProperties = {
  backgroundColor: "#DCE8E9",
  borderRadius: "10px",
  padding: "20px",
  maxHeight: "650px",
  overflowY: "auto",
};

const thTdStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#2F919C",
  border: "none",
  padding: "10px 20px",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "bold",
  color: "white",
};

export default ListViewPatient;
