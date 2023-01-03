import { Component, ReactNode } from "react"

interface UserSearchProps {
    users: { name: string; age: number }[]
}

interface UserSearchState {
    name: string
    user: { name: string; age: number }[] | undefined
}
class UserSearchCL extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: "",
        user: undefined,
    }

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name
        })

        this.setState({ user: foundUser })
    }

    render() {
        const { name, user } = this.state

        return (
            <div>
                User Search
                <input
                    value={name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button onClick={this.onClick}>Find User</button>
                <div>{user && user.map((u) => u.name)}</div>
            </div>
        )
    }
}

export default UserSearchCL
