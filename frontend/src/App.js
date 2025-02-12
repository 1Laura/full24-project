import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import CreatePage from "./pages/CreatePage";
import Toolbar from "./components/Toolbar";

function App() {
    return (
        <BrowserRouter>
            <Toolbar/>
            <Routes>
                <Route path="/" element={<IndexPage/>}></Route>
                <Route path="/create" element={<CreatePage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;