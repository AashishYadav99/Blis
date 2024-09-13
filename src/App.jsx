import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import HostessRegisterForm from "./components/HostessRegisterForm"; // Renamed form component
import AgencyRegisterForm from "./components/AgencyRegisterForm";
// import Test2 from "./components/Test2";

function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set Home as the root route */}
        <Route path="/hostessform" element={<HostessRegisterForm />} /> {/* Updated component name */}
        <Route path="/agencyform" element={<AgencyRegisterForm />} />
        </Routes>
    </>
  );
}

export default App;
