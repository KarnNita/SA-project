import React, { useState } from 'react';
import SideNavBar from "./_SNB";

const PatientDetail: React.FC = () => {
  const [patient, setPatient] = useState({
    fullName: '',
    patientID: '',
    appointmentDate: '',
    age: '',
    gender: '',
    tel: '',
    courseStatus: '',
  });

  return (
    <div className="flex h-[100svh] bg-[#f0f4f7]">
      <SideNavBar />
      {/* เนื้อหาหลัก */}
      <div className="flex flex-col flex-grow bg-white mx-5 my-5 rounded-[60px] border border-gray-300 h-[calc(100svh-50px)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center p-10">
          <h1 className="text-[#2F919C] text-2xl">Patient Detail</h1>
        </div>
  
        {/* วงกลมตกแต่ง */}
        <div className="w-5 h-5 bg-[#FFD06C] rounded-full absolute top-[63px] right-[285px]"></div>
        <div className="w-5 h-5 bg-[#FFD06C] rounded-full absolute top-[63px] right-[500px]"></div>
        <h1 className="w-5 h-5 rounded-full absolute top-[60px] right-[225px] text-lg mr-8">EditPatient</h1>
        <h1 className="w-5 h-5 rounded-full absolute top-[59px] right-[440px] text-lg mr-8">MedicalHistory</h1>
  
        {/* ข้อมูลของผู้ป่วย */}
        <div className="bg-[#DCE8E9] p-5 rounded-xl mx-10 w-[1000px] h-[220px]">
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="grid grid-cols-3">
                <label>Full name:</label>
                <input type="text" value={patient.fullName} readOnly className="p-2 rounded-lg border border-gray-300 w-[250px]" />
              </div>
              <div className="grid grid-cols-3 items-center">
                <label>Patient ID:</label>
                <input type="text" value={patient.patientID} readOnly className="p-2 rounded-lg border border-gray-300 w-[250px]" />
              </div>
              <div className="grid grid-cols-3 items-center">
                <label>Appointment Date:</label>
                <input type="text" value={patient.appointmentDate} readOnly className="p-2 rounded-lg border border-gray-300 w-[250px]" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-6 items-center">
                <label>Gender:</label>
                <input type="text" value={patient.gender} readOnly className="p-2 rounded-lg border border-gray-300 w-[250px]" />
              </div>
              <div className="grid grid-cols-6 items-center">
                <label>Age:</label>
                <input type="text" value={patient.age} readOnly className="p-2 rounded-lg border border-gray-300 w-[250px]" />
              </div>
              <div className="grid grid-cols-6 items-center">
                <label>Tel:</label>
                <input type="text" value={patient.tel} readOnly className="p-2 rounded-lg border border-gray-300 w-[250px]" />
              </div>
            </div>
          </div>
        </div>
  
        {/* ตารางนัดหมาย */}
        <div className="bg-[#DCE8E9] p-28 rounded-xl mx-10 my-5 text-center text-gray-500">
          <h1>Appointment Schedule</h1>
        </div>
  
        {/* ปุ่มเลือกการรักษา */}
        <button className="bg-[#2F919C] text-white px-5 py-2 rounded-md ml-auto mr-10 mt-5">
          Select Treatment
        </button>
      </div>
    </div>
  );
  
};

export default PatientDetail;
