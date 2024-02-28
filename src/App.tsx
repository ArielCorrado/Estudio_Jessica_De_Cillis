import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbarAndInfo/NavBarAndInfo";
import "./styles/generalStyles.css";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import CvPage from "./pages/cvPage/CvPage";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cv/:name" element={<CvPage/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
