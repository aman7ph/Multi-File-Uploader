import DataTable from "react-data-table-component";

const data = [
  {
    name: "John Doe",
    title: "Software Engineer",
    department: "Engineering",
    role: "Backend Developer",
    email: "john.doe@example.com",
    image: "https://example.com/images/john_doe.jpg",
    date: 1630219200,
  },
  {
    name: "Alice Smith",
    title: "Data Scientist",
    department: "Data Science",
    role: "Machine Learning Engineer",
    email: "alice.smith@example.com",
    image: "https://example.com/images/alice_smith.jpg",
    date: 1640976000,
  },
  {
    name: "Bob Johnson",
    title: "Product Manager",
    department: "Product Management",
    role: "Product Owner",
    email: "bob.johnson@example.com",
    image: "https://example.com/images/bob_johnson.jpg",
    date: 1625097600,
  },
  {
    name: "Emily Brown",
    title: "UX Designer",
    department: "Design",
    role: "UI/UX Designer",
    email: "emily.brown@example.com",
    image: "https://example.com/images/emily_brown.jpg",
    date: 1632921600,
  },
  {
    name: "Michael Wang",
    title: "Marketing Manager",
    department: "Marketing",
    role: "Digital Marketer",
    email: "michael.wang@example.com",
    image: "https://example.com/images/michael_wang.jpg",
    date: 1629936000,
  },
  {
    name: "Sophia Garcia",
    title: "Financial Analyst",
    department: "Finance",
    role: "Financial Planner",
    email: "sophia.garcia@example.com",
    image: "https://example.com/images/sophia_garcia.jpg",
    date: 1643539200,
  },
  {
    name: "Daniel Martinez",
    title: "HR Manager",
    department: "Human Resources",
    role: "Talent Acquisition Specialist",
    email: "daniel.martinez@example.com",
    image: "https://example.com/images/daniel_martinez.jpg",
    date: 1637097600,
  },
  {
    name: "Olivia Lee",
    title: "Customer Support",
    department: "Customer Service",
    role: "Support Representative",
    email: "olivia.lee@example.com",
    image: "https://example.com/images/olivia_lee.jpg",
    date: 1645564800,
  },
  {
    name: "William Taylor",
    title: "Sales Manager",
    department: "Sales",
    role: "Sales Executive",
    email: "william.taylor@example.com",
    image: "https://example.com/images/william_taylor.jpg",
    date: 1627315200,
  },
  {
    name: "Ella Anderson",
    title: "Operations Manager",
    department: "Operations",
    role: "Operations Specialist",
    email: "ella.anderson@example.com",
    image: "https://example.com/images/ella_anderson.jpg",
    date: 1638508800,
  },
  {
    name: "David Wilson",
    title: "Quality Assurance Engineer",
    department: "Quality Assurance",
    role: "QA Tester",
    email: "david.wilson@example.com",
    image: "https://example.com/images/david_wilson.jpg",
    date: 1647225600,
  },
  {
    name: "Emma Thompson",
    title: "Content Writer",
    department: "Content",
    role: "Content Creator",
    email: "emma.thompson@example.com",
    image: "https://example.com/images/emma_thompson.jpg",
    date: 1628284800,
  },
  {
    name: "James Rodriguez",
    title: "Business Analyst",
    department: "Business Analysis",
    role: "Data Analyst",
    email: "james.rodriguez@example.com",
    image: "https://example.com/images/james_rodriguez.jpg",
    date: 1634582400,
  },
  {
    name: "Ava Moore",
    title: "Project Manager",
    department: "Project Management",
    role: "Project Coordinator",
    email: "ava.moore@example.com",
    image: "https://example.com/images/ava_moore.jpg",
    date: 1635254400,
  },
  {
    name: "Jackson White",
    title: "IT Administrator",
    department: "IT",
    role: "Systems Administrator",
    email: "jackson.white@example.com",
    image: "https://example.com/images/jackson_white.jpg",
    date: 1648780800,
  },
  {
    name: "Charlotte Harris",
    title: "Legal Counsel",
    department: "Legal",
    role: "Corporate Lawyer",
    email: "charlotte.harris@example.com",
    image: "https://example.com/images/charlotte_harris.jpg",
    date: 1641436800,
  },
  {
    name: "Ryan Campbell",
    title: "Graphic Designer",
    department: "Design",
    role: "Graphic Artist",
    email: "ryan.campbell@example.com",
    image: "https://example.com/images/ryan_campbell.jpg",
    date: 1625721600,
  },
  {
    name: "Grace Turner",
    title: "Public Relations Manager",
    department: "Public Relations",
    role: "PR Specialist",
    email: "grace.turner@example.com",
    image: "https://example.com/images/grace_turner.jpg",
    date: 1642041600,
  },
  {
    name: "Nathan Clark",
    title: "Financial Advisor",
    department: "Finance",
    role: "Investment Analyst",
    email: "nathan.clark@example.com",
    image: "https://example.com/images/nathan_clark.jpg",
    date: 1631472000,
  },
  {
    name: "Madison Hall",
    title: "Customer Success Manager",
    department: "Customer Success",
    role: "Client Relations Specialist",
    email: "madison.hall@example.com",
    image: "https://example.com/images/madison_hall.jpg",
    date: 1623369600,
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
    <div className="w-full m-auto flex-1 min-h-0 overflow-scroll">
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        selectableRows
        onSelectedRowsChange={handleChange}
        defaultSortFieldId={1}
      />
    </div>
  );
}
