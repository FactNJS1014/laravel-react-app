import { NavLink } from "react-router-dom"
import Router from "../router/Index.jsx"
function App() {
  return (
    <div>
      <h1>Hello App</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
        </nav>
        <Router/>
    </div>
  )
}

export default App
