import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaUser, FaWrench } from 'react-icons/fa';
import { RiExchange2Fill } from "react-icons/ri";
import { Outlet, useNavigate } from '@remix-run/react';

function SideNavBar() {
  const navigate = useNavigate(); // สร้างฟังก์ชันนำทาง

  return (
    <div className='flex flex-row bg-[#DCE8E9]'>
      <div className="h-auto w-[17.5rem] bg-[#2F919C] text-white flex flex-col justify-between text-center rounded-r-3xl">
        {/* Title */}
        <div className="p-6">
          <h1 className="text-2xl">Clinic Application</h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow px-6">
          <ul className="space-y-8 flex flex-col justify-evenly [&>li:hover>div]:hover:bg-white [&>li:hover>div]:hover:text-[#1FA1AF] [&>li>div]:mb-3">
            <li className="flex flex-col items-center pt-9">
              <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center transition">
                <IoMdHome size={26} className="mb-2" />
                <button onClick={() => navigate("/Home")} className="text-lg block">
                  Home Menu
                </button>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center transition">
                <FaUser size={20} className="mb-2" />
                <button onClick={() => navigate("/StaffListView")} className="text-lg block">
                  Staff List
                </button>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center transition">
                <IoPersonAddSharp size={20} className="mb-2" />
                <button onClick={() => navigate("/AddNewPatient")} className="text-lg block">
                  Add New Patient
                </button>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div 
                className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center transition cursor-pointer" 
                onClick={() => navigate("/IncomeExpenses")}
              >
                <RiExchange2Fill size={24} className="mb-2" />
                <span className="text-lg block">Income Expenses</span>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center transition">
                <FaWrench size={20} className="mb-2" />
                <button onClick={() => navigate("/Equipment")} className="text-lg block">
                  Equipment
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <div className="pt-12 pl-6 pr-6">
          <button className="w-full py-2 bg-white rounded-lg text-[#1FA1AF]">
            LOG OUT
          </button>
        </div>
        <div className="h-9"></div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideNavBar;
