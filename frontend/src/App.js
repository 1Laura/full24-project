import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Toolbar from "./components/Toolbar";
import UserRegisterLoginCreatePostPage from "./pages/UserRegisterLoginCreatePostPage";
import ColorPage from "./pages/ColorPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Toolbar/>
                <Routes>
                    <Route path="/" element={<UserRegisterLoginCreatePostPage/>}></Route>
                    <Route path="/color" element={<ColorPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;