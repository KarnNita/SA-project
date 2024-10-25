import { useState, useEffect } from "react";
import { useNavigate } from '@remix-run/react';
import SideNavBar from "./_SNB";

interface FinancialRecord {
    financial_record_id: number;
    record_date: string;
    income_and_expenses: string;
    cost: string;
    staff_id: number; 
}

function IncomeExpenses() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Income");
    const [incomeData, setIncomeData] = useState<FinancialRecord[]>([]);
    const [expensesData, setExpensesData] = useState<FinancialRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFinancialRecords = async () => {
            try {
                const response = await fetch('https://dinosaur.prakasitj.com/financialrecords/getFinancialRecords');
                if (!response.ok) {
                    throw new Error('Failed to fetch financial records');
                }
                const data: FinancialRecord[] = await response.json();
                
                // Split records into income and expenses
                const income = data.filter(record => record.income_and_expenses === 'income');
                const expenses = data.filter(record => record.income_and_expenses === 'expense');
                
                setIncomeData(income);
                setExpensesData(expenses);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            }            
        };

        fetchFinancialRecords();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="flex flex-row h-[100svh] bg-[#DCE8E9] overflow-hidden">
            <SideNavBar />
            <div className="flex flex-col flex-grow bg-white 
                            mr-[40px] ml-[40px] mt-[25px] mb-[25px]
                            rounded-[60px] border border-gray-300 h-[calc(100svh-50px)]
                            shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                
                <div className="flex justify-between items-center p-16">
                    <h1 className="text-[#2F919C] text-2xl">Income & Expenses</h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-2 border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-[400px] text-xl ">
                    <h2 
                        className={`cursor-pointer ${activeTab === "Income" ? "text-black" : "text-gray-400"}`} 
                        onClick={() => setActiveTab("Income")}
                    >
                        Income
                    </h2>
                    <h2 
                        className={`cursor-pointer ${activeTab === "Expenses" ? "text-black" : "text-gray-400"}`} 
                        onClick={() => setActiveTab("Expenses")}
                    >
                        Expenses
                    </h2>
                </div>

                <div className="flex flex-col flex-grow items-center justify-center bg-[#DCE8E9] 
                                mx-auto mt-[25px] mb-[25px] w-[118svh]
                                rounded-[60px] border border-gray-300 h-[calc(100svh-50px)]">
                    
                    {activeTab === "Income" && (
                        <div>
                            <ul className="text-xl">
                                {incomeData.map(income => (
                                    <li key={income.financial_record_id} className="mb-2">
                                        Amount: ${income.cost}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "Expenses" && (
                        <div>
                            <ul className="text-xl">
                                {expensesData.map(expense => (
                                    <li key={expense.financial_record_id} className="mb-2">
                                        Amount: ${expense.cost}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default IncomeExpenses;
