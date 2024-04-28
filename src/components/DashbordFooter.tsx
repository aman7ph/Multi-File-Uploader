import React from "react";

function DashbordFooter() {
  return (
    <div className="m-4 sm:m-8 flex justify-center gap-24 items-center w-full">
      <button className="bg-red-300 px-5 py-2 rounded-lg hover:scale-125 hover:bg-red-400 transition ease-in-out delay-150">
        Delete
      </button>
      <button className="bg-green-300  px-8 py-2 rounded-lg hover:scale-125 hover:bg-green-400 transition ease-in-out delay-150">
        Edit
      </button>
    </div>
  );
}

export default DashbordFooter;
