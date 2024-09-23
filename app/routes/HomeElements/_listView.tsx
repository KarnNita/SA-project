import { useState } from "react";

export default function Card(){
    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    return (
        <div className="flex justify-center items-start min-height: 0vh; pt-12 pb-12 bg-[#DCE8E9]">
            <div className="p-6 border border-gray-300 rounded-3xl bg-white shadow-lg max-w-lg w-full relative">
                //ListView
            </div>
        </div>
    );
}