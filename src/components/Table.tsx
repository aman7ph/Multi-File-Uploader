import DataTable from "react-data-table-component";

const data = [
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
    date: Date.now(),
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
    date: Date.now(),
  },
];

interface row {
  name: string;
  title: string;
  department: string;
  role: string;
  email: string;
  image: string;
  date: number;
}
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
    selector: (row: row) => row.name,
    sortable: true,
  },
  {
    name: "title",
    selector: (row: row) => row.title,
    sortable: true,
  },
  {
    name: "role",
    selector: (row: row) => row.role,
  },
  {
    name: "department",
    selector: (row: row) => row.department,
    sortable: true,
  },

  {
    name: "email",
    selector: (row: row) => row.email,
  },
  {
    name: "date",
    selector: (row: row) => row.date,
  },
  {
    name: "Image",
    selector: (row: row) => row.image,
    cell: (row: row) => (
      <img
        src={row.image}
        alt={`Image for ${row.name}`}
        height={60}
        width={60}
      />
    ),
  },
];

const handleChange = (selected: {
  allSelected: boolean;
  selectedCount: number;
  selectedRows: row[];
}) => {
  console.log(selected);
  const selectedData = selected.selectedRows;
};

export default function Table() {
  return (
    <div className="w-full m-auto flex-1 min-h-0 overflow-hidden">
      <DataTable
        columns={columns}
        data={data}
        fixedHeader
        customStyles={customStyles}
        selectableRows
        onSelectedRowsChange={handleChange}
        defaultSortFieldId={1}
      />
    </div>
  );
}
