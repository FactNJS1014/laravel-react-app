import Router from "../router/Index.jsx";
import Navbar from "./Navbar/Index.jsx";
function App() {


    return (
        <div>
            <Navbar />

            <div className="p-3">
                <Router />
            </div>
        </div>
    );
}

export default App;
