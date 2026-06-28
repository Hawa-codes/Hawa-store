import { Routes, Route } from "react-router";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import NavBar from "./Components/NavBar";

function Router() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default Router;
