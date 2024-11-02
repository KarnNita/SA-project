import PatientHeader from "./components/PatientHeader";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";

interface OutputRowProps {
  treatment: Finance;
}

interface Finance {
  treatment_id: number;
  cost: number;
  treatment_name: string;
}

interface Patient {
  patient_id: number;
  name_surname: string;
  phone_number: string;
  birthday: string;
  gender: string;
  course_count: number;
  appointment_date: string; // Keep it as string to handle input correctly
  first_visit_date: string;
}

const TotalCost: React.FC = () => {
  const [financeList, setFinanceList] = useState<Finance[]>([]);
  const [cost, setCost] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [course, setCourse] = useState<number>(0);
  const [baseTotalCost, setBaseTotalCost] = useState<number>(0);
  const [extraCost, setExtraCost] = useState<number>(0); // New state for additional course fee
  const [currentPatientName, setCurrentPatientName] = useState<string>("Guest");
  const [currentPatient, setCurrentPatient] = useState<string>("Guest");
  const [appointment, setAppointment] = useState<Date[]>([]);

  const [financeFormData, setFinanceFormData] = useState({
    record_date: "",
    income_and_expenses: "",
    cost: "",
    staff_id: "",
  });

  const [medicalFormData, setMedicalFormData] = useState({
    cost: "",
    appointment_date: "",
    doctorid: "",
    patientid: "",
    staff_id: "",
    treatment_id: "",
  });

  const [requisitionFormData1, setRequisitionFormData1] = useState({
    use_amount: "",
    requisition_date: "",
    equipment_id: 1,
    staff_id: "",
  });

  const [requisitionFormData2, setRequisitionFormData2] = useState({
    use_amount: "",
    requisition_date: "",
    equipment_id: 2,
    staff_id: "",
  });

  const [requisitionFormData3, setRequisitionFormData3] = useState({
    use_amount: "",
    requisition_date: "",
    equipment_id: 3,
    staff_id: "",
  });

  const [equipmentFormData, setEquipmentFormData] = useState({
    equipment_id: "",
    equipment_name: "",
    price: "",
    amount: "",
  });

  const [formData, setFormData] = useState<Partial<Patient>>({});

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const selectedTreatments: Finance[] = JSON.parse(
    sessionStorage.getItem("selectedTreatments") || "[]"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = selectedTreatments.map((treatment) =>
          fetch(
            `https://dinosaur.prakasitj.com/treatmenttype/searchbyName/${treatment.treatment_name
              .toLowerCase()
              .replace(/ /g, "")}`
          ).then((response) => response.json())
        );

        const results = await Promise.all(requests);
        const mergedData = results.flat();
        setFinanceList(mergedData);

        const calculatedBaseTotalCost = mergedData.reduce(
          (acc, item) => acc + item.cost,
          0
        );
        setBaseTotalCost(calculatedBaseTotalCost);

        const storedPatientID = sessionStorage.getItem("currentPatientID");
        const currentPatientIDValue = storedPatientID
          ? storedPatientID.replace(/^"|"$/g, "")
          : "Guest";

        setCurrentPatient(currentPatientIDValue);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTreatments]);

  useEffect(() => {
    const fetchPatientData = async () => {
      if (currentPatient !== "Guest") {
        const patientResponse = await fetch(
          `https://dinosaur.prakasitj.com/patient/getNamebyID/${currentPatient}`
        );
        const patientData = await patientResponse.json();

        if (Array.isArray(patientData) && patientData.length > 0) {
          setCurrentPatientName(patientData[0].name_surname);
        } else {
          setCurrentPatientName("Guest");
        }
      }
    };
    fetchPatientData();
  }, [currentPatient]);

  useEffect(() => {
    const fetchCourseData = async () => {
      if (currentPatient !== "Guest") {
        const courseResponse = await fetch(
          `https://dinosaur.prakasitj.com/patient/searchbyID/${currentPatient}`
        );
        const courseData = await courseResponse.json();

        if (Array.isArray(courseData) && courseData.length > 0) {
          setCourse(courseData[0].course_count);
        } else {
          setCourse(0);
        }
      }
    };
    fetchCourseData();
  }, [currentPatient]);

  const handleAddCourseFee = () => {
    setCourse(course + 10);
    setExtraCost((prevExtra) => prevExtra + 5500);
  };

  const handleUseCourse = () => {
    if (course > 0) {
      setCourse(course - 1); // Decrease the course count by 1
      setExtraCost((prevExtra) => prevExtra - 600); // Adjust extra cost if using course
    }
  };

  const totalCost = baseTotalCost + extraCost;

  const handleDone = async () => {
    try {
      // Assuming `currentPatientId` holds the patient's ID and newCourseCount is calculated based on selected treatments
      const newCourseCount = course;
  
      // Update patient course_count
      await fetch(`https://dinosaur.prakasitj.com/patient/editPatient`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient_id: currentPatient,
          course_count: newCourseCount,
          appointment_date: appointment,
        }),
      });

      submitToApi();
  
      console.log("Data submitted successfully.");
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };

  const submitFinancialData = async () => {
    try {
      const response = await fetch("https://dinosaur.prakasitj.com/financialrecords/addRecord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(financeFormData),
      });
      if (!response.ok) {
        throw new Error("Failed to add financial data.");
      }
    } catch (error) {
      console.error("Error submitting financial data:", error);
      setError("Error submitting financial data. Please try again.");
    }
  };
  
  const submitMedicalData = async () => {
    try {
      const response = await fetch("https://dinosaur.prakasitj.com/medicalrecords/addRecord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(medicalFormData),
      });
      if (!response.ok) {
        throw new Error("Failed to add medical data.");
      }
    } catch (error) {
      console.error("Error submitting medical data:", error);
      setError("Error submitting medical data. Please try again.");
    }
  };
  
  const submitEquipmentData = async () => {
    try {
      if (equipmentFormData.equipment_id) {
        const response = await fetch("https://dinosaur.prakasitj.com/equipment/editAmount", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(equipmentFormData),
        });
        if (!response.ok) {
          throw new Error("Failed to save equipment data.");
        }
      }
    } catch (error) {
      console.error("Error submitting equipment data:", error);
      setError("Error submitting equipment data. Please try again.");
    }
  };
  
  const submitToApi = async () => {
    try {
      // Update finance data based on total cost
      setFinanceFormData({
        ...financeFormData,
        record_date: new Date().toISOString().split("T")[0],
        income_and_expenses: "income",
        cost: totalCost.toString(),
        staff_id: sessionStorage.getItem("currentUser") || "",
      });
  
      // Set medical form data including selected appointment date
      setMedicalFormData({
        ...medicalFormData,
        cost: totalCost.toString(),
        appointment_date: new Date().toISOString().split("T")[0], //This has to be today date, right?
        doctorid: sessionStorage.getItem("chosenDoctor") || "",
        patientid: currentPatient,
        staff_id: sessionStorage.getItem("currentUser") || "",
        treatment_id: financeList.length ? JSON.stringify(financeList[0].treatment_id) : "",
      });
  
      // Use Promise.all to submit requisition records concurrently
      const requisitionPromises = [
        submitRequisitionData(requisitionFormData1),
        submitRequisitionData(requisitionFormData2),
        submitRequisitionData(requisitionFormData3),
      ];
  
      await submitFinancialData();
      await submitMedicalData();
      await submitEquipmentData();

      // Await all requisition submissions and handle responses
      await Promise.all(requisitionPromises);
  
      // Navigate back after successful submission
      navigate("/listViewPatient");
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Error submitting data. Please check required fields and try again.");
    }
  };
  
  const submitRequisitionData = async (requisitionFormData: { use_amount?: string; requisition_date?: string; equipment_id: any; staff_id?: string; }) => {
    try {
      const items = [requisitionFormData.equipment_id]; 
      // Loop through each item in requisitionFormData and submit it if it has data
      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          const response = await fetch("https://dinosaur.prakasitj.com/requisitionrecords/addRecord", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              use_amount: items[i].amount,
              requisition_date: items[i].requisition_date,
              equipment_id: items[i], // assuming this exists and is correct
              staff_id: items[i].staff_id,
            }),
          });
  
          if (!response.ok) {
            throw new Error(`Failed to add requisition data for item ${i + 1}`);
          }
        }
      }
    } catch (error) {
      console.error("Error submitting requisition data:", error);
      setError("Error submitting requisition data. Please try again.");
    }
  };

  return (
    <div className="flex flex-row justify-center items-start w-[80svw] pt-10 pb-7">
      <div className="p-6 border border-gray-300 rounded-l-3xl bg-white shadow-lg w-[53svw]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#1FA1AF] text-2xl">Total Cost</h1>
        </div>

        <PatientHeader
          patientName={currentPatientName}
          patientID={currentPatient}
        />

        <div className="flex flex-row mt-5">
          <div className="flex flex-col gap-4">
            <h1>Treatment Selected:</h1>
            {selectedTreatments.map((treatment, index) => (
              <OutputRow key={index} treatment={treatment} />
            ))}
          </div>
          <div className="flex flex-col justify-center items-center pl-12 text-lg">
            <h1>Apply for a course</h1>
            <div className="bg-[#1FA1AF] rounded-3xl justify-center items-center text-center p-4 w-[15svw] text-base">
              <div className="w-[13svw]">
                <h1 className="text-white font-normal">
                  The course fee will be included in the total cost
                </h1>
              </div>
              <button
                type="submit"
                className="self-end w-32 py-1 mt-3 bg-white text-[#1FA1AF] rounded-lg"
                style={{ filter: "drop-shadow(0 0.25rem 0.125rem #246D76)" }}
                onClick={handleAddCourseFee}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5">
          <div className="flex flex-col gap-3">
            <h1>Choose a treatment appointment date:</h1>
            <div className="flex flex-col w-[30svw] bg-[#DCE8E9] rounded-3xl text-start h-36">
              <input
                type="datetime-local"
                className="w-[20svw] my-5 mx-5 rounded-md"
                style={{ filter: "drop-shadow(0 0.25rem 0.125rem #A6AFB0)" }}
              />
              <h1 className="ml-5">Date of treatment</h1>
              <div
                className="bg-white rounded-md w-[20svw] ml-5 mt-1"
                style={{ filter: "drop-shadow(0 0.25rem 0.125rem #A6AFB0)" }}
              >
                <h1>{new Date().toISOString().slice(0, 10)}</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center ml-12">
            <h1>Course:</h1>
            <div className="flex flex-col w-[15svw] bg-[#DCE8E9] rounded-3xl text-start h-36 justify-center items-center">
              <div className="bg-white rounded-3xl w-[13svw] h-28 items-center text-center">
                <h1 className="font-semibold pt-1 text-base">Remain</h1>
                <h1 className="font-semibold text-[#1FA1AF] text-xl">
                  {course}/10
                </h1>
                <button
                  type="submit"
                  className="self-end w-32 py-1 mt-2 bg-[#FFCD6D] text-white rounded-lg font-semibold"
                  style={{ filter: "drop-shadow(0 0.25rem 0.125rem #A6AFB0)" }}
                  onClick={handleUseCourse}
                >
                  Use
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-8">
          <div className="flex flex-col mt-8">
            <h1 className="text-[#1FA1AF] font-semibold">Total Cost:</h1>
            <div className="bg-[#1FA1AF] w-[18svw] rounded-3xl h-8 text-white flex items-center justify-center">
              ${loading ? "Calculating..." : totalCost}{" "}
              {/* Displays updated total */}
            </div>
          </div>

          <button
            type="submit"
            className="self-end w-28 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg ml-[23svw] mb-2"
            style={{ filter: "drop-shadow(0 0.25rem 0.125rem #A6AFB0)" }}
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

function OutputRow({ treatment }: OutputRowProps) {
  return (
    <div className="bg-[#D6D6D6] rounded-3xl h-8 text-center w-[30svw] mb-2">
      <h1>
        {treatment.treatment_name}: ${treatment.cost}
      </h1>
    </div>
  );
}
export default TotalCost;