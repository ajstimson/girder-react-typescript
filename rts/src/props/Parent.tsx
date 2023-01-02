import { Child, ChildFC } from "./Child"

const Parent = () => {
    return (
        <div>
            <Child color="red" onClick={() => console.log("clicked")} />
            <ChildFC color="red" onClick={() => console.log("clicked")}>
                adpgkj
            </ChildFC>
        </div>
    )
}

export default Parent
