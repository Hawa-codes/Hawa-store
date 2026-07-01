import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import NavBar from "./Components/NavBar";
import Footer from "./components/Footer";
import Product from "./pages/Product";

function Router() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Contact />} />
        <Route path="/article" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;