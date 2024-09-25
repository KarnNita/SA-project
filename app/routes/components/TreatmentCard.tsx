import { useState } from "react";

interface TreatmentCardProps{
  item1:string;
  item2:string;
  item3:string;
}
export default function TreatmentCard({item1, item2, item3}: TreatmentCardProps) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row pt-5 pl-5 pr-5 pb-6 bg-[#DCE8E9] rounded-3xl items-center gap-6">
      <div
        className="w-[7.5rem] h-24 rounded-3xl"
        style={{ filter: "drop-shadow(0 0.25rem 0.125rem #AAB4B5)" }}
      >
        <img
          className="object-cover w-full h-full rounded-3xl"
          src="https://www.petlandflorida.com/wp-content/uploads/2022/04/shutterstock_1290320698-1-scaled.jpg"
        />
      </div>

      <div className="flex flex-col self-start gap-2 ">
        <h1 className="text-2xl text-[#1FA1AF] pb-1">Treatment Name</h1>
        <InputRow text="Use" item={item1}/>
        <InputRow text="" item={item2}/>
        <InputRow text="" item={item3}/>

        <div className="flex flex-row gap-3 pt-2">
          <h1>
            Choose Doctor:
          </h1>
          <select className="w-[19.09rem] rounded-3xl text-center">
            <option value="">Select Doctor</option>
            <option value="Doctor1">Doctor1</option>
            <option value="Doctor2">Doctor2</option>
          </select>
        </div>

      </div>

      <div className="flex flex-row justify-center items-center gap-2">
        <div className="grid">
          
          <input
            type="checkbox"
            onChange={()=>{setChecked(!checked)}}
            className="w-4 h-4 appearance-none border-2 border-white rounded-[0.2rem] checked:bg-white checked:border-transparent focus:outline-none shadow-inner col-start-1 row-start-1"
          />
          <svg className={`col-start-1 row-start-1 ml-[0.1rem] ${checked?"visible":"invisible"}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13" height="15" viewBox="0 0 30 30" style={{pointerEvents: "none"}}>
            <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
          </svg>
          
        </div>
        <h1 className="pb-1">
          select
        </h1>
      </div>
    </div>
  );
}

interface InputRowProps{
  text:string;
  item:string;
}

function InputRow({text, item}:InputRowProps){
  return(
    <div className="flex flex-row gap-2">
      {text!=""?<h1>{text}</h1>:<div className="mr-[1.6352rem]"></div>}
          
          <div className="flex flex-row bg-white rounded-3xl w-[12rem] justify-center">
            <h1>{item}</h1>
          </div>
          <input className="rounded-3xl w-[12rem]"></input>
        </div>
  );
}