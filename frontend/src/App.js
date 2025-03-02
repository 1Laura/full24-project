import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import InventoryPage from "./pages/InventoryPage";


function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Toolbar/>
                <Routes>
                    <Route path="/" element={<RegisterLoginPage/>}></Route>
                    <Route path="/inventory" element={<InventoryPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;