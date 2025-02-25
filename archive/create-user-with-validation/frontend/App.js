import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ErrorMessage from "./components/ErrorMessage";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";
import useStore from "./store/main";

function App() {
    const {error} = useStore(state => state);

    return (
        // <BrowserRouter>
        //     <Toolbar/>
        //     <Routes>
        //         <Route path="/" element={<IndexPage/>}></Route>
        //         <Route path="/create" element={<CreatePage/>}></Route>
        //     </Routes>
        // </BrowserRouter>

        <div className="container">
            <div>
                {error && <ErrorMessage/>}
            </div>
            <div className="d-flex">

                <div className="flex-grow-1">
                    <CreateUser/>
                </div>
                <div className="flex-grow-1">
                    <UsersList/>
                </div>
            </div>
        </div>

    )
        ;
}

export default App;