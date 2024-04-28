import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { fileType } from "../config/fileConfig";
import toast from "react-hot-toast";

function DropFileInput() {
  const [fileList, setFileList] = useState<File[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperRef.current?.classList.add("opacity-60");
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperRef.current?.classList.remove("opacity-60");
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperRef.current?.classList.remove("opacity-60");
    const files = e.dataTransfer.files;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  const onFileDrop = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (fileList.length + files.length <= 5) {
      const updatedList = [...fileList];
      for (let i = 0; i < files.length; i++) {
        updatedList.push(files[i]);
      }
      setFileList(updatedList);
    } else {
      toast.error("You can only upload up to 5 files at a time.");
    }
  };

  const fileRemove = (file: File) => {
    const updatedList = fileList.filter((f) => f !== file);
    setFileList(updatedList);
  };

  return (
    <div className="flex-container p-12 shadow-md shadow-amber-200 lg:w-1/3 bg-white rounded-lg flex flex-col items-center max-h-screen sm:max-h-[80%] overflow-y-auto min-h-0 ">
      <h1 className="m-4 text-center text-3xl font-semibold">Upload here</h1>
      <div
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="relative p-4 w-full lg:w-4/5 h-4/5 border-amber-700 flex items-center justify-center bg-amber-300 rounded-md border-2 border-dashed hover:opacity-60"
      >
        <div className="text-center flex items-center flex-col">
          <img src="/upload.png" alt="upload-icon" className="w-5/6" />
          <p>
            Drag and drop your file or{" "}
            <span className="font-semibold">Click to upload</span>
          </p>
        </div>
        <input
          type="file"
          value=""
          onChange={onFileDrop}
          className="opacity-0 absolute w-full h-full cursor-pointer left-0 top-0"
          multiple
        />
      </div>
      {fileList.length > 0 ? (
        <div className="flex flex-col w-4/5">
          <p className="font-medium m-5 text-center">Ready to upload</p>

          {fileList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center flex-wrap bg-amber-50 rounded-lg border-2 border-amber-500/50 m-2 p-2 gap-6 hover:bg-amber-100 hover:scale-105 transition ease-in-out delay-150"
            >
              <div className="flex flex-col gap-3 grow">
                <div className="flex">
                  <img
                    src={
                      typeof fileType[item.type.split("/")[1]] === "string"
                        ? fileType[item.type.split("/")[1]]
                        : fileType["defaultType"]
                    }
                    alt=""
                    className="w-12 mr-5"
                  />
                  <div className="flex justify-between flex-col gap-3">
                    <p>{item.name}</p>
                    <p>
                      {(item.size / (1024 * 1024)).toFixed(2)} MB (
                      {(item.size / 1024).toFixed(2)}kb)
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-white hover:cursor-pointer text-center font-semibold text-lg w-7 h-7 rounded-full bg-red-500">
                <span onClick={() => fileRemove(item)}>x</span>
              </div>
            </div>
          ))}
          <div className="flex gap-4 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="please add discription for the file please"
              className="p-3 block mx-auto w-full border-2 outline-4 outline-inherit rounded-md border-slate-300 border-solid hover:border-amber-300 hover:scale-105 transition ease-in-out delay-150"
            />
            <select className="px-2 rounded-lg bg-amber-200 border-2 border-amber-500/50 hover:bg-amber-300 hover:border-amber-500/100 hover:scale-105 transition ease-in-out delay-150">
              <option value="" disabled selected hidden>
                Category
              </option>
              <option value="1">Creative</option>
              <option value="2">Productivity</option>
              <option value="3">Sharing</option>
              <option value="3">none</option>

              <input
                type="text"
                placeholder="please add discription for the file please"
                className="p-3 block mx-auto my-2 w-full border-2 outline-4 outline-inherit rounded-md border-slate-300 border-solid hover:border-amber-300 hover:scale-110 transition ease-in-out delay-150"
              />
            </select>
          </div>

          <button className="mx-auto my-2 bg-amber-200 p-4 w-1/2 rounded-lg border-2 border-amber-500/50 hover:bg-amber-300 hover:border-amber-500/100 hover:scale-110 transition ease-in-out delay-150">
            Upload
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default DropFileInput;
