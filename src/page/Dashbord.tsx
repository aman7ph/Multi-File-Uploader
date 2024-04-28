import DashbordFooter from "../components/DashbordFooter";
import DashbordNav from "../components/DashbordNav";
import Table from "../components/Table";

function Dashbord() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-full sm:max-h-[90%] flex items-center flex-col w-full sm:w-3/4">
        <DashbordNav />
        <Table />
        <DashbordFooter />
      </div>
    </div>
  );
}

export default Dashbord;
