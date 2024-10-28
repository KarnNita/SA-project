import { CiUser } from "react-icons/ci";
import { useLoaderData, useNavigate } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import moment from "moment";

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
  const [formattedDate, setFormattedDate] = useState<Patient[]>([]);

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
      <div className="flex flex-row justify-center items-start h-full pt-10 pb-7">
        <div className="p-6 border border-gray-300 h-full rounded-3xl bg-white shadow-lg w-[70svw] ml-20">
          <div className="flex flex-row">
            <div className="flex justify-between items-center mb-4 ml-2 mt-2">
              <h1 className="text-[#1FA1AF] text-2xl">Today's Patient List</h1>
            </div>
            <div className="flex flexrow" onClick={handleSeeAllClick}
                style={{cursor: "pointer"}}>
              <div className="bg-[#DCE8E9] w-7 h-7 ml-[43svw] mt-2 rounded-full">
                <CiUser className="ml-1 mt-1 text-[#1FA1AF]" size={20} />
              </div>
              <h1
                className="text-[#1FA1AF] ml-2 mt-2"
                onClick={handleSeeAllClick}
                style={{cursor: "pointer"}}
              >
                See All Patient
              </h1>
            </div>
          </div>

          <div
            className="mt-4 bg-[#DCE8E9] rounded-2xl h-[120lvh]"
            style={{overflowY: "auto" }}
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
                    {format(patient.birthday, 'dd-MM-yyyy')}
                  </td>
                  <td style={thTdStyle}>{patient.gender}</td>
                  <td style={thTdStyle}>
                    {format(patient.appoinment_date, 'yyyy/MM/dd kk:mm:ss')}
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

const thTdStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
};

export default Home;
