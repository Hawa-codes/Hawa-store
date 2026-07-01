import { Routes, Route } from "react-router";
import AboutUs from "./pages/Product";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import NavBar from "./Components/NavBar";
import Footer from "./components/Footer";

function Router() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<AboutUs />} />
        <Route path="/services" element={<Contact />} />
        <Route path="/article" element={<Contact />} />
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default Router;
