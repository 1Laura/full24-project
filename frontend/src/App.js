import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";


function App() {
    return (
        <div className="container d-flex">
            <div className="flex-grow-1">
                <UserRegister/>
            </div>
            <div className="flex-grow-1">
                <UserLogin/>
            </div>
        </div>
    );
}

export default App;