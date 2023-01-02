import ReactDOM from "react-dom/client"
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"
import Parent from "./props/Parent"
import EventComponent from "./events/EventComponent"
import "./style.css"

const el = document.getElementById("root")

const root = ReactDOM.createRoot(el!)

const App = () => {
    return (
        <div>
            <EventComponent />
            <UserSearch />
            <GuestList />
            <Parent />
        </div>
    )
}

// 5) Show the component on the screen
root.render(<App />)
