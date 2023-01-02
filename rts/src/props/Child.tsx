interface ChildProps {
    color: string
    onClick: () => void
    children?: React.ReactNode
}
/* 
    uses the ChildProps interface, but loses the 
    ability for TS to access built-in React component
    properties like contextTypes, propTypes, and displayName
*/
export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}> Click Me!</button>
        </div>
    )
}

/*  
    Keep those React component properties with this method
*/
export const ChildFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            <h1>{color}</h1>
            <p>{children}</p>
            <button onClick={onClick}> Click Me!</button>
        </div>
    )
}
