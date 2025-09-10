import { NavLink } from "react-router-dom"
import Router from "../router/Index.jsx"
function App() {
  return (
    <div>
      <h1>Hello App</h1>
        <nav>
            <NavLink to="/" className={"text-2xl font-bold"}>Home</NavLink>
            <NavLink to="/about" className={"text-2xl font-bold ms-3"}>About</NavLink>
        </nav>
        <Router/>
    </div>
  )
}

export default App
