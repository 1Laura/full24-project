import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UsersListPage from "./pages/UsersListPage";
import SingleUserPage from "./pages/SingleUserPage";

function App() {
    return (
        <BrowserRouter>
            <Toolbar/>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/userslist" element={<UsersListPage/>}></Route>
                <Route path="/userslist:username" element={<SingleUserPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;