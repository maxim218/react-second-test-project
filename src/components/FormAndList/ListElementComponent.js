export default function ListElementComponent(props) {
    return (
        <div style={{marginBottom: "10px", color: "white", background: "#2F4F4F", padding: "8px", width: "400px"}}>
            {props.content}
        </div>
    );
}