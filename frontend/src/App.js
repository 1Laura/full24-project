import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import AllUsersPage from "./pages/AllUsersPage";
import AllPostsPage from "./pages/AllPostsPage";
import CreatePostPage from "./pages/CreatePostPage";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/login" element={<LoginPage/>}></Route>
                        <Route path="/register" element={<RegisterPage/>}></Route>
                        <Route path="/profile" element={<ProfilePage/>}></Route>
                        <Route path="/userslist" element={<AllUsersPage/>}></Route>
                        <Route path="/createpost" element={<CreatePostPage/>}></Route>
                        <Route path="/posts" element={<AllPostsPage/>}></Route>
                        <Route path="/posts/:postId" element={<SinglePostPage/>}></Route>
                        <Route path="/post" element={<SinglePostPage/>}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
