import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaUser, FaWrench } from 'react-icons/fa';

function SideNavBar() {
  return (
    <div className="h-screen w-64 bg-[#2F919C] text-white flex flex-col justify-between text-center">
      {/* Title */}
      <div className="p-6">
        <h1 className="text-2xl">Clinic Application</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-grow px-6">
        <ul className="space-y-4">
          <li className="flex flex-col items-center pt-10">
            <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center hover:bg-white hover:text-[#1FA1AF] transition">
              <IoMdHome size={26} className="mb-2" />
              <a href="#Home" className="text-lg block">
                Home Menu
              </a>
            </div>
          </li>
          <li className="flex flex-col items-center pt-5">
            <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center hover:bg-white hover:text-[#1FA1AF] transition">
              <FaUser size={20} className="mb-2" />
              <a href="#StaffList" className="text-lg block">
                Staff List
              </a>
            </div>
          </li>
          <li className="flex flex-col items-center pt-5">
            <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center hover:bg-white hover:text-[#1FA1AF] transition">
              <IoPersonAddSharp size={20} className="mb-2" />
              <a href="#AddNewPatient" className="text-lg block">
                Add New Patient
              </a>
            </div>
          </li>
          <li className="flex flex-col items-center pt-5">
            <div className="bg-[#2F919C] text-white w-36 h-24 rounded-3xl flex flex-col items-center justify-center hover:bg-white hover:text-[#1FA1AF] transition">
              <FaWrench size={20} className="mb-2" />
              <a href="#Equipment" className="text-lg block">
                Equipment
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Button at the Bottom */}
      <div className="pb-8 pl-6 pr-6">
        <button className="w-full py-2 bg-white rounded-lg text-[#1FA1AF]">
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default SideNavBar;
