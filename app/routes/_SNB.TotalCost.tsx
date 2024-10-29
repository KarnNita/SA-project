import PatientHeader from "./components/PatientHeader";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface OutputRowProps {
  treatment: string;
}

interface Finance {
  treatment_id: number;
  cost: number;
  treatment_name: string;
}

const TotalCost: React.FC = () => {
  const [financeList, setFinanceList] = useState<{ treatment_id: number; cost: number; treatment_name: string; }[]>([]);
  const [cost, setCost] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [course, setCourse] = useState<number>(0);
  const [baseTotalCost, setBaseTotalCost] = useState<number>(0);
  const [extraCost, setExtraCost] = useState<number>(0); // New state for additional course fee

  const selectedTreatments = JSON.parse(
    sessionStorage.getItem("selectedTreatments") || "[]"
  );
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for each treatment individually
        const requests = selectedTreatments.map((treatment: string) =>
          fetch(
            `https://dinosaur.prakasitj.com/treatmenttype/searchbyName/${treatment.toLowerCase().replace(/ /g, '')}`
          ).then((response) => response.json())
        );
  
        // Wait for all requests to complete
        const results = await Promise.all(requests);

        // Flatten results if needed
        const mergedData = results.flat();
        setFinanceList(mergedData);

        // Calculate total cost based on financeList
        const calculatedBaseTotalCost = mergedData.reduce(
          (acc, item) => acc + item.cost, 0
        );
        setBaseTotalCost(calculatedBaseTotalCost);

      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [selectedTreatments]);

  const handleAddCourseFee = () => {
    setExtraCost(prevExtra => prevExtra + 5500); // Update extraCost when course is applied
  };

  const handleUseCourse = () => {
    setExtraCost(prevExtra => prevExtra - 600); // Adjust extra cost if using course
  };

  const totalCost = baseTotalCost + extraCost;
  
  return (
    <div className="flex flex-row justify-center items-start w-[80svw] pt-10 pb-7">
      <div className="p-6 border border-gray-300 rounded-l-3xl bg-white shadow-lg w-[53svw]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#1FA1AF] text-2xl">Total Cost</h1>
        </div>

        <PatientHeader patientName='' patientID=''/>

        <div className="flex flex-row mt-5">
          <div className="flex flex-col gap-4">
            <h1>Treatment Selected:</h1>
            {selectedTreatments.map((treatment: string, index: number) => (
              <OutputRow
                key={index}
                treatment={treatment}
                cost={cost}
                financeList={financeList}
              />
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
                Apply
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
                <h1>Date</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center ml-12">
            <h1>Course:</h1>
            <div className="flex flex-col w-[15svw] bg-[#DCE8E9] rounded-3xl text-start h-36 justify-center items-center">
              <div className="bg-white rounded-3xl w-[13svw] h-28 items-center text-center">
                <h1 className="font-semibold pt-1 text-base">Remain</h1>
                <h1 className="font-semibold text-[#1FA1AF] text-xl">10/10</h1>
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
              ${loading ? "Calculating..." : totalCost} {/* Displays updated total */}
            </div>
          </div>

          <button
            type="submit"
            className="self-end w-28 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg ml-[23svw] mb-2"
            style={{ filter: "drop-shadow(0 0.25rem 0.125rem #A6AFB0)" }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

interface OutputRowProps {
  treatment: string;
  cost: number;
  financeList: Finance[];
}

function OutputRow({ treatment, financeList }: OutputRowProps) {
  const normalizedTreatment = treatment.trim().toLowerCase();
  const matchedTreatment = financeList.find(
    (item) => item.treatment_name.trim().toLowerCase() === normalizedTreatment
  );

  const treatmentCost = matchedTreatment ? matchedTreatment.cost : 0;

  return (
    <div className="bg-[#D6D6D6] rounded-3xl h-8 text-center w-[30svw] mb-2">
      <h1>
        {treatment}: ${treatmentCost}
      </h1>
    </div>
  );
}

export default TotalCost;
