import { Toaster } from "react-hot-toast";
import UplodePage from "./page/UplodePage";

function App() {
  return (
    <div className="bg-slate-200 h-screen">
      <UplodePage />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
