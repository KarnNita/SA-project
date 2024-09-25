import { CiUser } from "react-icons/ci";

function Home() {
    return(
        <div className="flex flex-row w-[78svw]">
            <div className="flex flex-row justify-center items-start w-[75svw] pt-10 pb-7">
                <div className="p-6 border border-gray-300 h-[100svh] rounded-3xl bg-white shadow-lg w-[53svw]">

                    <div className="flex flex-row">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-[#1FA1AF] text-2xl">Patient List</h1>
                        </div>
                        <div className="flex flexrow">
                            <div className="bg-[#DCE8E9] w-7 h-7 ml-[35svw] rounded-full">
                                <CiUser className="ml-1 mt-1 text-[#1FA1AF]" size={20}/>
                            </div>
                            <h1 className="text-[#1FA1AF] ml-2 mt-[0.1rem]">
                                See All
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        <DateHeader/><DateHeader/><DateHeader/>
                    </div>
                    
                    <div className="mt-6">
                        <table className="min-w-full bg-[#DCE8E9] border divide-white h-[70svh]">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 text-left">Patient ID</th>
                                    <th className="py-2 px-4 text-left">Name</th>
                                    <th className="py-2 px-4 text-left">Appointment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4">P001</td>
                                    <td className="py-2 px-4">John Doe</td>
                                    <td className="py-2 px-4">2024-09-22</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">P002</td>
                                    <td className="py-2 px-4">Alice Smith</td>
                                    <td className="py-2 px-4">2024-09-25</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">P003</td>
                                    <td className="py-2 px-4">Bob Frank</td>
                                    <td className="py-2 px-4">2024-09-29</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">P004</td>
                                    <td className="py-2 px-4">Mary White</td>
                                    <td className="py-2 px-4">2024-10-01</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-10">
                <div className="flex flex-col bg-white w-[17svw] h-[50svh] rounded-3xl gap-3">
                    <h1 className="font-semibold pl-8 pt-5">
                        Next Day List
                    </h1>
                    <div className="bg-[#94dfd9] w-[13svw] h-3 ml-8 rounded-3xl" style={{ filter: "drop-shadow(0 0.25rem 0.125rem #C3C3C3)" }}/>
                    <PatientRow/><PatientRow/><PatientRow/><PatientRow/>
                </div>

                <div className="flex flex-row bg-[#1FA1AF] w-[17svw] h-[20svh] rounded-3xl mt-5">
                </div>
            </div>
        </div>
    );
}

function DateHeader(){
    return(
        <div className="flex flex-row gap-3 justify-start items-center">

        <div
          className="w-[0.625rem] h-[4.25rem] bg-[#2F919C] rounded-3xl"
          style={{ filter: "drop-shadow(0 0.25rem 0.125rem #C3C3C3)" }}
        >
        </div>

        <div className="flex flex-col">
            <span className="text-[#000000] text-lg font-[350]">Date Month Year</span>
            <span className="text-[#000000] text-xl font-semibold">
                Queue today
            </span>
            <span className="text-[#000000] text-lg font-[375]">Number of queue</span>
        </div>

      </div>
    );
}

function PatientRow() {
    return(
        <div className="flex flex-row gap-11 ml-8">
            <h1 className="text-sm">
                Patient Name
            </h1>
            <h1 className="text-sm">
                Patient ID
            </h1>
        </div>
    );
}

export default Home;
