import { useState } from "react";
import { useNavigate } from '@remix-run/react';
import SideNavBar from "./_SNB";

function MedicalHistory() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Income");

    const incomeData = [
        { id: 1, source: "Salary", amount: 5000 },
        { id: 2, source: "Investment", amount: 2000 },
    ];

    const expensesData = [
        { id: 1, item: "Rent", amount: 1500 },
        { id: 2, item: "Groceries", amount: 300 },
    ];

    return (
        <div className="flex flex-row h-[100svh] bg-[#DCE8E9] overflow-hidden">
            <SideNavBar />
            <div className="flex flex-col flex-grow bg-white 
                            mr-[40px] ml-[40px] mt-[25px] mb-[25px]
                            rounded-[60px] border border-gray-300 h-[calc(100svh-50px)]
                            shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                
                <div className="flex justify-between items-center p-16">
                    <h1 className="text-[#2F919C] text-2xl">Medical History</h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-2 border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                <div className="flex flex-row gap-[300px] text-xl ml-8 pl-9">
                    <h2 className="text-2xl">Patient ID:</h2>
                    <h2 className="text-2xl">Patient Name:</h2>
                </div>

                <div className="flex flex-col flex-grow items-center justify-center bg-[#DCE8E9] 
                                mx-auto mt-[25px] mb-[25px] w-[118svh]
                                rounded-[60px] border border-gray-300 h-[calc(100svh-50px)]">
                
                </div>
            </div>
            
        </div>
    );
}

export default MedicalHistory;
