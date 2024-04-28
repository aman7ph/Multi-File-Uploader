function Dialog({
  message,
  onDialog,
  nameProduct,
}: {
  message: string;
  onDialog: (choose: boolean) => void;
  nameProduct: string;
}) {
  return (
    <div
      className="fixed bg-[rgba(0,0,0,0.5)] inset-0"
      onClick={() => onDialog(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-center absolute -translate-x-2/4 -translate-y-2/4 p-5 rounded-[10px] left-2/4 top-2/4 bg-white"
      >
        <h3 className="text-[#111] text-base">{message}</h3>
        <h1 className="text-[blue] text-2xl">{nameProduct}</h1>
        <div className="flex items-center">
          <button
            onClick={() => onDialog(true)}
            className="text-[white] cursor-pointer m-3 px-5 py-2 rounded-md border-[none] bg-red-500"
          >
            Yes
          </button>
          <button
            onClick={() => onDialog(false)}
            className="text-[white] cursor-pointer m-3 px-5 py-2  rounded-md border-[none] bg-green-500"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dialog;
