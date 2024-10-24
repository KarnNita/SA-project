function StaffPage() {

  return (
    <div className="flex flex-row justify-center items-start w-[60svw] pt-10 pb-7">
      <div className="p-6 border border-gray-300 rounded-3xl bg-white shadow-lg w-[43svw]">
        <div className="flex flex-row items-center mb-6 mt-7 ml-5">
          <div
            className="w-[0.625rem] h-[4.25rem] bg-[#2F919C] rounded-3xl"
            style={{ filter: "drop-shadow(0 0.25rem 0.125rem #C3C3C3)" }}
          ></div>
          <h1 className="text-black text-2xl ml-3">Staff Name</h1>
        </div>

        <div className="flex flex-col w-[30svw] h-[60svh] bg-[#DCE8E9] rounded-3xl gap-3 mb-5 mt-8 ml-5 pt-3">
          <OutputBox title="Username:" output=""/>
          <OutputBox title="Name:" output=""/>
          <OutputBox title="Tel:" output=""/>
          <OutputBox title="Age:" output=""/>
          <OutputBox title="Gender:" output=""/>
          <OutputBox title="Role:" output=""/>
          <OutputBox title="Email:" output=""/>
        </div>
      </div>
    </div>
  );
}

interface OutputBoxProps{
  title:string;
  output:string;
}

function OutputBox({title, output}: OutputBoxProps) {
  return (
    <div className="flex flex-row mt-5 ml-8">
      <h1 className="font-semibold mr-3">{title}</h1>
      <div className="bg-white rounded-3xl h-5 w-[15svw] mt-1" />
    </div>
  );
}

export default StaffPage;
