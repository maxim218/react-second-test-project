export default function ListElementComponent(props) {
    const btnStyleObj = {
        display: "inline-block",
        padding: "6px",
        cursor: "pointer",
        border: "2px solid gray",
        background: "white", color: 'black',
        marginLeft: "14px",
        marginRight: "14px"
    };

    const boxStyleObj = {
        marginBottom: "10px",
        color: "white",
        background: "#2F4F4F",
        padding: "8px",
        width: "400px"
    };

    function btnClickFunc() {
        props.onDeleteAction(props.copyKey);
    }

    return (
        <div style={boxStyleObj}>
            <div style={btnStyleObj} onClick={btnClickFunc}>Delete</div>
            {props.content}
        </div>
    );
}