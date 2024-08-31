import { useState } from "react";

interface props {
    name : string
    tel : string
    age : number
    gender : string
    appointment_date : string 
}

export default function Card({name,tel, age, gender, appointment_date} : props){
    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    return (
        <div className={`flex flex-col w-48 ${checked ? "bg-green-300" : "bg-slate-300"} rounded-xl justify-center align-middle items-center p-5 m-5`}>
            <h1>{name}</h1>
            <h1 className="self-start">Patient Info</h1>
            <ul>
                <li>Tel : {tel}</li>
                <li>Age : {age}</li>
                <li>Gender : {gender}</li>
                <li>Appointment Date : {appointment_date} </li>
                <li>Course</li>
                <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                Click ME!
                </label>
            </ul>
        </div>
    );
}