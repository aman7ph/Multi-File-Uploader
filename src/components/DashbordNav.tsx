function DashbordNav() {
  return (
    <div className="w-full p-4 flex flex-col gap-2 sm:gap-4 sm:p-12">
      <div className="flex items-center justify-between gap-8">
        <button className="px-2 rounded-lg bg-amber-100 border-2 border-amber-300/50 hover:bg-amber-200 hover:border-amber-300/100 hover:scale-125 transition ease-in-out delay-150 sm:px-5 sm:p-2">
          Upload File
        </button>
        <button className="px-1 rounded-lg bg-amber-100 border-2 border-amber-300/50 hover:bg-amber-200 hover:border-amber-300/100 hover:scale-125 transition ease-in-out delay-150 sm:p-2">
          Manage Category
        </button>
      </div>
      <div className="flex justify-end flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="flex gap-4 sm:mx-4">
          <input
            type="text"
            placeholder="search..."
            className=" p-1 border-2 outline-4 outline-inherit rounded-md border-amber-200 border-solid hover:border-amber-400 hover:scale-105 transition ease-in-out delay-150 sm:p-3"
          />
          <button className="mx-0 p-1 rounded-lg bg-amber-100 border-2 border-amber-300/50 hover:bg-amber-200 hover:border-amber-300/100 hover:scale-110 transition ease-in-out delay-150 sm: px-5 sm:py-2">
            search
          </button>
        </div>

        <select className=" p-1 mx-3 rounded-lg bg-amber-100 border-2 border-amber-300/50 hover:bg-amber-200 hover:border-amber-300/100 hover:scale-110 transition ease-in-out delay-150 sm:px-5 sm:py-2 ">
          <option value="" disabled selected hidden>
            Category
          </option>
          <option value="1">Creative</option>
          <option value="2">Productivity</option>
          <option value="3">Sharing</option>
          <option value="4">Backup</option>
        </select>
      </div>
    </div>
  );
}

export default DashbordNav;
