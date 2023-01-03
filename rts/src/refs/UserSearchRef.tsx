import { useState, useRef, useEffect } from "react"
const users = [
    { name: "Ethan", age: 109 },
    { name: "Bob", age: 2 },
    { name: "Ethel", age: 21 },
]
const UserSearchRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState("")
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >()

    useEffect(() => {
        //Type Guard
        if (!inputRef.current) {
            return
        }
        inputRef.current.focus()
    }, [])
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }
    return (
        <div>
            <h2>User Search</h2>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onClick}>Search</button>
            <div>{user && user.name}</div>
            <div>{user && user.age}</div>
        </div>
    )
}

export default UserSearchRef
