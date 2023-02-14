
function Point(props) {
    return (
        <div>
            *
            {props.message}
            <button onClick={() => {
                props.deletePoint(props.message)
            }}>delete</button>
        </div>
    )
}
export default Point;