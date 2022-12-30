import "./App.css"
import axios from "axios"
import { useState } from "react"

function App() {
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        )
        setData(response.data)
    }
    return (
        <div className="App">
            <h1>TypeScript App</h1>

            <button onClick={getData}>Get Data</button>
        </div>
    )
}

export default App
