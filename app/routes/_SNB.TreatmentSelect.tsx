import React, { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import TreatmentCard from "./components/TreatmentCard";
import PatientHeader from "./components/PatientHeader";

const TreatmentSelect: React.FC = () => {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [treatmentList, setTreatmentList] = useState<{ treatment_id: number; cost: number; treatment_name: string; }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dinosaur.prakasitj.com/treatmenttype/getTreatmentList`
      );
      const data = await response.json();
      setTreatmentList(data);
    };
    fetchData();
  }, []);

  const handleTreatmentSelect = (treatmentName: string, isSelected: boolean) => {
    setSelectedTreatments((prev) =>
      isSelected
        ? [...prev, treatmentName] // Add treatment if selected
        : prev.filter((t) => t !== treatmentName) // Remove treatment if deselected
    );
  };

  const handleNextPage = () => {
    sessionStorage.setItem("selectedTreatments", JSON.stringify(selectedTreatments));
    navigate("/totalCost");
  };

  return (
    <div className="flex flex-row justify-center items-start w-[80svw] pt-10 pb-7">
      <div className="p-6 border border-gray-300 rounded-l-3xl bg-white shadow-lg w-[53svw]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#1FA1AF] text-2xl">Treatment Select</h1>
        </div>

        <PatientHeader />

        <div className="flex flex-col gap-[0.65rem] mt-5">
          {treatmentList.map((treatment) => (
            <TreatmentCard
              key={treatment.treatment_id}
              treatmentName={treatment.treatment_name} // Pass treatment_name to TreatmentCard
              item1="Needle size 1"
              item2="Needle size 2"
              item3="Cotton"
              onTreatmentSelect={handleTreatmentSelect} // Pass callback
            />
          ))}
        </div>

        <div className="flex flex-row items-end justify-end pt-5">
          <button
            type="submit"
            className="self-end w-28 py-2 bg-[#1FA1AF] text-white font-bold rounded-lg"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSelect;
