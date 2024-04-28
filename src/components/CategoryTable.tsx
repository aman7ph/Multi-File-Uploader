import { useRef, useState } from "react";
import DataTable from "react-data-table-component";
import Dialog from "./Dialog";

const data = [
  {
    catagory_name: "Documents",
    catagory_id: 1,
    catagory_item: 150,
  },
  {
    catagory_name: "Images",
    catagory_id: 2,
    catagory_item: 230,
  },
  {
    catagory_name: "Videos",
    catagory_id: 3,
    catagory_item: 75,
  },
  {
    catagory_name: "Music",
    catagory_id: 4,
    catagory_item: 120,
  },
  {
    catagory_name: "Applications",
    catagory_id: 5,
    catagory_item: 85,
  },
  {
    catagory_name: "Spreadsheets",
    catagory_id: 6,
    catagory_item: 50,
  },
  {
    catagory_name: "Presentations",
    catagory_id: 7,
    catagory_item: 40,
  },
  {
    catagory_name: "Code Files",
    catagory_id: 8,
    catagory_item: 100,
  },
  {
    catagory_name: "Archives",
    catagory_id: 9,
    catagory_item: 65,
  },
  {
    catagory_name: "Other",
    catagory_id: 10,
    catagory_item: 200,
  },
  {
    catagory_name: "Documents",
    catagory_id: 1,
    catagory_item: 150,
  },
  {
    catagory_name: "Images",
    catagory_id: 2,
    catagory_item: 230,
  },
  {
    catagory_name: "Videos",
    catagory_id: 3,
    catagory_item: 75,
  },
  {
    catagory_name: "Music",
    catagory_id: 4,
    catagory_item: 120,
  },
  {
    catagory_name: "Applications",
    catagory_id: 5,
    catagory_item: 85,
  },
  {
    catagory_name: "Spreadsheets",
    catagory_id: 6,
    catagory_item: 50,
  },
  {
    catagory_name: "Presentations",
    catagory_id: 7,
    catagory_item: 40,
  },
  {
    catagory_name: "Code Files",
    catagory_id: 8,
    catagory_item: 100,
  },
  {
    catagory_name: "Archives",
    catagory_id: 9,
    catagory_item: 65,
  },
  {
    catagory_name: "Other",
    catagory_id: 10,
    catagory_item: 200,
  },
];

interface row {
  catagory_name: string;
  catagory_id: number;
  catagory_item: number;
}

export default function CategoryTable() {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#fffbeb",
        },
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#ffedd5",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };
  const columns = [
    {
      name: "name",
      selector: (row: row) => row.catagory_name,
      sortable: true,
    },
    {
      name: "title",
      selector: (row: row) => row.catagory_item,
      sortable: true,
    },

    {
      name: "",
      cell: (row: row) => (
        <button
          onClick={() => handleButtonClick(row.catagory_id)}
          className=" text-green-900"
        >
          Edit 🖉
        </button>
      ),
    },
    {
      name: "",
      cell: (row: row) => (
        <button
          onClick={() => handleDelete(row.catagory_id)}
          className=" text-red-900"
        >
          Delete 🗑
        </button>
      ),
    },
  ];

  const handleButtonClick = (row: number) => {
    console.log("Button clicked for row:", row);
  };
  const [catagory, setCatagory] = useState(data);

  interface Dialog {
    message: string;
    isLoading: boolean;
    nameProduct: string;
  }
  const [dialog, setDialog] = useState<Dialog>({
    message: "",
    isLoading: false,
    nameProduct: "",
  });

  const idProductRef = useRef<number | undefined>();
  const handleDialog = (
    message: string,
    isLoading: boolean,
    nameProduct: string
  ) => {
    setDialog({
      message,
      isLoading,
      nameProduct,
    });
  };
  const handleDelete = (id: number) => {
    const index = catagory.findIndex((p) => p.catagory_id === id);

    handleDialog(
      "Are you sure you want to delete?",
      true,
      catagory[index].catagory_name
    );
    idProductRef.current = id;
  };

  const areUSureDelete = (choose: boolean) => {
    if (choose) {
      setCatagory(
        catagory.filter((p) => p.catagory_id !== idProductRef.current)
      );
      handleDialog("", false, "");
    } else {
      handleDialog("", false, "");
    }
  };
  return (
    <div className="w-full m-auto flex-1 min-h-0 overflow-auto">
      <DataTable
        columns={columns}
        data={catagory}
        customStyles={customStyles}
        defaultSortFieldId={1}
      />
      {dialog.isLoading && (
        <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </div>
  );
}
