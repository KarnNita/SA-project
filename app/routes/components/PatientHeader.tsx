export default function PatientHeader(){
    return(
        <div className="flex flex-row gap-3 justify-start items-center">

        <div
          className="w-[0.625rem] h-[4.25rem] bg-[#2F919C] rounded-3xl"
          style={{ filter: "drop-shadow(0 0.25rem 0.125rem #C3C3C3)" }}
        >
        </div>

        <div className="flex flex-col">
          <span className="text-[#000000] text-xl font-semibold">
            Patient Name
          </span>
          <span className="text-[#000000] text-lg">Patient ID:</span>
        </div>

      </div>
    );
}