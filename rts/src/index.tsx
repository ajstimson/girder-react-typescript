import ReactDOM from "react-dom/client"
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"
import Parent from "./props/Parent"
import "./style.css"

// 2) Get a reference to the div with ID root
const el = document.getElementById("root")

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!)

// 4) Create a component
const App = () => {
    return (
        <div>
            <UserSearch />
            <GuestList />
            <Parent />
        </div>
    )
}

// 5) Show the component on the screen
root.render(<App />)
