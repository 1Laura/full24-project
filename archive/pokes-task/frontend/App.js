import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UsersListPage from "./pages/UsersListPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
    return (
        <BrowserRouter>
            <Toolbar/>
            <Routes>
                {/*<Route path="/" element={<LoginPage/>}></Route>*/}
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/users" element={<UsersListPage/>}></Route>
                <Route path="/users/:username" element={<UserProfilePage/>}></Route>
                <Route path="*" element={<LoginPage />} /> {/* Default route fallback */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;