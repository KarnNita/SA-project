import PatientHeader from "./components/PatientHeader";
import { useLocation } from "react-router-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
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
  const [currentStaffId, setCurrentStaffId] = useState<string>("");
  const currentUser = sessionStorage.getItem("currentUser");

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
    equipment_id: 0,
    equipment_name: "",
    price: "",
    amount: "",
  });

  const [formData, setFormData] = useState<Partial<Patient>>({});

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatientData = async () => {
      if (currentPatient !== "Guest") {
        const staffResponse = await fetch(`https://dinosaur.prakasitj.com/staff/searchbyName/` + {currentUser});
        const staffData = await staffResponse.json();
        
        if (Array.isArray(staffData) && staffData.length > 0) {
          setCurrentStaffId(staffData[0].staff_id);
        } else {
          setCurrentStaffId("1");
        }
      }
    };
    fetchPatientData();
  }, [currentPatient]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "course_count" ? Number(value) : value,
      
    }));
  };

  const selectedTreatments: Finance[] = JSON.parse(
    sessionStorage.getItem("selectedTreatments") || "[]"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = selectedTreatments.map((treatment) =>
          fetch(
            `https://dinosaur.prakasitj.com/treatmenttype/searchbyName/` +
            treatment.treatment_name.toLowerCase().replace(/ /g, "")
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

  const submitData = async (data: object, url: string) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Failed to submit data to ${url}`);
      }
    } catch (error) {
      console.error(`Error submitting data to ${url}:`, error);
      setError(`Error submitting data to ${url}. Please try again.`);
    }
  };
  
  const submitEquipmentData = async () => {
    const equipmentIDList = [1, 2, 3];
  
    try {
      for (let equipmentID of equipmentIDList) {
        let useAmount;
  
        // Set useAmount based on equipmentID
        if (equipmentID === 1) {
          useAmount = sessionStorage.getItem("item3Stored");
        } else if (equipmentID === 2) {
          useAmount = sessionStorage.getItem("item1Stored");
        } else if (equipmentID === 3) {
          useAmount = sessionStorage.getItem("item2Stored");
        }
  
        // Update equipmentFormData with the current equipment ID and useAmount
        const updatedEquipmentFormData = {
          ...equipmentFormData,
          equipment_id: equipmentID,
          amount: JSON.stringify(useAmount),
        };
  
        // Submit data for the current equipment ID
        const response = await fetch(`https://dinosaur.prakasitj.com/equipment/decreaseEquipment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedEquipmentFormData),
        });
  
        if (!response.ok) {
          throw new Error(`Failed to save equipment data for equipment ID: ${equipmentID}`);
        }
      }
  
      console.log("All equipment data submitted successfully.");
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
        staff_id: currentStaffId,
      });
  
      // Set medical form data including selected appointment date
      setMedicalFormData({
        ...medicalFormData,
        cost: totalCost.toString(),
        appointment_date: new Date().toISOString().split("T")[0], // This has to be today's date, right?
        doctorid: sessionStorage.getItem("chosenDoctor") || "",
        patientid: currentPatient,
        staff_id: currentStaffId,
        treatment_id: financeList.length ? JSON.stringify(financeList[0].treatment_id) : "",
      });
  
      setRequisitionFormData1({
        ...requisitionFormData1,
        use_amount: sessionStorage.getItem("item3Stored") || "", // cotton
        requisition_date: new Date().toISOString().split("T")[0],
        equipment_id: 1,
        staff_id: currentStaffId,
      });
  
      setRequisitionFormData2({
        ...requisitionFormData2,
        use_amount: sessionStorage.getItem("item1Stored") || "", // Needle1
        requisition_date: new Date().toISOString().split("T")[0],
        equipment_id: 2,
        staff_id: currentStaffId,
      });
  
      setRequisitionFormData3({
        ...requisitionFormData3,
        use_amount: sessionStorage.getItem("item2Stored") || "",
        requisition_date: new Date().toISOString().split("T")[0],
        equipment_id: 3,
        staff_id: currentStaffId,
      });
      
      await submitData(financeFormData, "https://dinosaur.prakasitj.com/financialrecords/addRecord");
      await submitData(medicalFormData, "https://dinosaur.prakasitj.com/medicalrecords/addRecord");
      submitEquipmentData();
  
      const requisitionData = [requisitionFormData1, requisitionFormData2, requisitionFormData3];
  
      // Submit requisition records concurrently
      const requisitionPromises = requisitionData.map((data) =>
        submitData(data, "https://dinosaur.prakasitj.com/requisition/addRecord")
      );
      await Promise.all(requisitionPromises);
  
      // Second submission for requisition data with individual item processing
      const submitRequisitionData = requisitionData.map(async (data) => {
        try {
          // Determine the use_amount based on equipment_id
          let useAmount;
          if (data.equipment_id === 1) {
            useAmount = sessionStorage.getItem("item3Stored");
          } else if (data.equipment_id === 2) {
            useAmount = sessionStorage.getItem("item1Stored");
          } else if (data.equipment_id === 3) {
            useAmount = sessionStorage.getItem("item2Stored");
          }
      
          const response = await fetch("https://dinosaur.prakasitj.com/requisition/addRecord", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              use_amount: useAmount,
              requisition_date: new Date().toISOString().split("T")[0],
              equipment_id: data.equipment_id,
              staff_id: currentStaffId,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`Failed to add requisition data for equipment_id ${data.equipment_id}`);
          }
        } catch (error) {
          console.error("Error submitting requisition data:", error);
          setError("Error submitting requisition data. Please try again.");
        }
      });
      
      // Await all submitRequisitionData promises to ensure completion
      await Promise.all(submitRequisitionData);
  
      navigate("/listViewPatient");
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Error submitting data. Please check required fields and try again.");
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
                onChange={handleChange}
                style={{ filter: "drop-shadow(0 0.25rem 0.125rem #A6AFB0)"

                 }}
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
