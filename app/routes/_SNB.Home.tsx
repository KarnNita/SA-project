import { CiUser } from "react-icons/ci";
import { useLoaderData, useNavigate } from "@remix-run/react";
import React, { useEffect, useState } from "react";

interface Patient {
  patient_id: number;
  name_surname: string;
  phone_number: string;
  birthday: string;
  gender: string;
  appoinment_date: string;
  course_count: number;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [patientList, setPatientList] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dinosaur.prakasitj.com/patient/getPatientList"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }

        const data:Patient[]  = await response.json();
        data.sort((a, b) => a.patient_id - b.patient_id);
        setPatientList(data);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data on mount

  const handleSeeAllClick = () => {
    navigate("/ListViewPatient"); // เปลี่ยนเส้นทางไปยังหน้า ListViewPatient
  };

  console.table(patientList);

  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const filteredPatients = patientList.filter(
    (patient: Patient) =>
      // patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      patient
  );

  return (
    <div className="flex flex-row w-[78svw]">
      <div className="flex flex-row justify-center items-start w-[75svw] pt-10 pb-7">
        <div className="p-6 border border-gray-300 h-[100svh] rounded-3xl bg-white shadow-lg w-[53svw]">
          <div className="flex flex-row">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[#1FA1AF] text-2xl">Today's Patient List</h1>
            </div>
            <div className="flex flexrow">
              <div className="bg-[#DCE8E9] w-7 h-7 ml-[26svw] rounded-full">
                <CiUser className="ml-1 mt-1 text-[#1FA1AF]" size={20} />
              </div>
              <h1
                className="text-[#1FA1AF] ml-2 mt-[0.1rem]"
                onClick={handleSeeAllClick}
              >
                See All Patient
              </h1>
            </div>
          </div>

          <div
            className="mt-6 bg-[#DCE8E9] rounded-2xl"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Patient ID</th>
                  <th style={thTdStyle}>Name</th>
                  <th style={thTdStyle}>Tel</th>
                  <th style={thTdStyle}>Birth Day</th>
                  <th style={thTdStyle}>Gender</th>
                  <th style={thTdStyle}>Appointment Date</th>
                  <th style={thTdStyle}>Course</th>
                  <th style={thTdStyle}></th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient: Patient, index: number) => (
                  <tr key={index} style={{ borderBottom: "1px solid white" }}>
                    <td style={thTdStyle}>{patient.patient_id}</td>
                  <td style={thTdStyle}>
                      {patient.name_surname}
                  </td>
                  <td style={thTdStyle}>{patient.phone_number}</td>
                  <td style={thTdStyle}>
                    {new Date(patient.birthday).toString()}
                  </td>
                  <td style={thTdStyle}>{patient.gender}</td>
                  <td style={thTdStyle}>
                    {new Date(patient.appoinment_date).toString()}
                  </td>
                  <td style={thTdStyle}>{patient.course_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateHeader() {
  return (
    <div className="flex flex-row gap-3 justify-start items-center">
      <div
        className="w-[0.625rem] h-[4.25rem] bg-[#2F919C] rounded-3xl"
        style={{ filter: "drop-shadow(0 0.25rem 0.125rem #C3C3C3)" }}
      ></div>

      <div className="flex flex-col">
        <span className="text-[#000000] text-lg font-[350]">
          Date Month Year
        </span>
        <span className="text-[#000000] text-xl font-semibold">
          Queue today
        </span>
        <span className="text-[#000000] text-lg font-[375]">
          Number of queue
        </span>
      </div>
    </div>
  );
}

function PatientRow() {
  return (
    <div className="flex flex-row gap-11 ml-8">
      <h1 className="text-sm">Patient Name</h1>
      <h1 className="text-sm">Patient ID</h1>
    </div>
  );
}

const thTdStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
};

export default Home;
