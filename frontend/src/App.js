import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import CreatePage from "./pages/CreatePage";

function App() {
    return (
        <div className="container-fluid d-flex p-5">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage/>}></Route>
                    <Route path="/create" element={<CreatePage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;