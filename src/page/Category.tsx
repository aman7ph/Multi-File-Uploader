import React, { useState } from "react";
import CategoryTable from "../components/CategoryTable";

function Category() {
  const [add, setAdd] = useState<boolean>(false);
  const handleClick = () => {
    setAdd(!add);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-full sm:max-h-[80%] flex items-center flex-col w-full sm:w-3/4">
        <div className="self-start m-4">
          <button
            className="my-4 sm:mx-4 px-2 rounded-md bg-amber-100 border-2 border-amber-300/50 hover:bg-amber-200 hover:border-amber-300/100 hover:scale-125 transition ease-in-out delay-150 sm:px-5 sm:p-2"
            onClick={handleClick}
          >
            Add Category
          </button>
          <div className={` ${add ? "flex" : "hidden"} gap-4 sm:mx-4`}>
            <input
              type="text"
              placeholder="category..."
              className=" p-1 border-2 outline-4 outline-inherit rounded-md border-amber-200 border-solid hover:border-amber-400 hover:scale-105 transition ease-in-out delay-150 sm:p-3"
            />
            <button className="mx-0 p-1 rounded-lg bg-amber-100 border-2 border-amber-300/50 hover:bg-amber-200 hover:border-amber-300/100 hover:scale-110 transition ease-in-out delay-150 sm: px-5 sm:py-2">
              Add
            </button>
          </div>
        </div>

        <CategoryTable />
      </div>
    </div>
  );
}

export default Category;
