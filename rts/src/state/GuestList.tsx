import { useState } from "react"

const GuestList: React.FC = () => {
    const [name, setName] = useState("")
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setName("")
        setGuests([...guests, name])
    }
    return (
        <div>
            <h3>Guest List</h3>
            {guests && (
                <ul>
                    {guests.map((n) => (
                        <li key={name}>{n}</li>
                    ))}
                </ul>
            )}
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
        </div>
    )
}

export default GuestList
