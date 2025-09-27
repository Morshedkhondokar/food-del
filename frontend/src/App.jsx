import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import 'animate.css';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
        <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;
