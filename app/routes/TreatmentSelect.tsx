import React, { useState, useEffect } from "react";

function TreatmentSelect() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#DCE8E9]">
      <div className="flex justify-center items-start pt-12 pb-12">
        <div className="p-6 border border-gray-300 rounded-3xl bg-white shadow-lg max-w-lg w-full relative">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#1FA1AF] text-2xl">Treatment Select</h1>
        </div>
        <span className="text-[#000000] text-xl">Patient Name</span>
          

         
        </div>
      </div>
    </div>
  );
}

export default TreatmentSelect;
