import PatientHeader from "./components/PatientHeader";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import TreatmentSelect from "./_SNB.TreatmentSelect";

interface OutputRowProps {
    treatment: string;
}

interface Finance {
    treatment_id: number;
    cost: number;
    treatment_name: string;
}

const TotalCost: React.FC = () => {
    const location = useLocation();
    const { selectedTreatments } = location.state || { selectedTreatments: [] };
    const [financeList, setFinanceList] = useState<Finance[]>([]);
    const [totalCost, setTotalCost] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dinosaur.prakasitj.com/treatmenttype/searchbyName?names=${selectedTreatments.join(",")}`);
                
                if (!response.ok) throw new Error("Failed to fetch treatment data");

                const data = await response.json();
                setFinanceList(data);
                
                // Calculate total cost based on fetched finance data
                const total = data.reduce((acc: number, item: Finance) => acc + (item.cost || 0), 0);
                setTotalCost(total);

            } catch (err) {
                setError("Failed to load data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedTreatments]);

    return (
        <div className="flex flex-row justify-center items-start w-[80svw] pt-10 pb-7">
            <div className="p-6 border border-gray-300 rounded-l-3xl bg-white shadow-lg w-[53svw]">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[#1FA1AF] text-2xl">Total Cost</h1>
                </div>

                <PatientHeader />

                <div className="flex flex-row mt-5">
                    <div className="flex flex-col gap-4">
                        <h1>Treatment Selected:</h1>
                        {selectedTreatments.map((treatment:string, index:number) => (
                            <OutputRow key={index} treatment={treatment} financeList={financeList} />
                        ))}
                    </div>

                    {/* Display Total Cost */}
                    <div className="flex flex-col mt-8">
                        <h1 className="text-[#1FA1AF] font-semibold">Total Cost:</h1>
                        <div className="bg-[#1FA1AF] w-[18svw] rounded-3xl h-8 text-white flex items-center justify-center">
                            ${loading ? "Calculating..." : totalCost}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface OutputRowProps {
    treatment: string;
    financeList: Finance[];
}

function OutputRow({ treatment, financeList }: OutputRowProps) {
    const treatmentCost = financeList.find(item => item.treatment_name === treatment)?.cost || 0;

    return (
        <div className="bg-[#D6D6D6] rounded-3xl h-8 text-center w-[30svw] mb-2">
            <h1>{treatment}: ${treatmentCost}</h1>
        </div>
    );
}

export default TotalCost;
