import Header from "./CompPages/Navbars/Header";
import Footer from "./CompPages/Navbars/Footer";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div >
     {/* <Header /> */}
     <Footer />
     <Outlet />
    </div>
  );
}

export default App;