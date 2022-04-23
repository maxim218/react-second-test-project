import ListElementComponent from "./ListElementComponent";

export default function ListComponent(props) {
    function onDeleteAction(stringKey) {
        props.deleteElementByKey(stringKey);
    }

    return (
        <div>
            {props.records.map(element => <ListElementComponent
                content={element.content}
                key={element.key}
                copyKey={element.key}
                onDeleteAction={onDeleteAction}
                />
            )}
            {props.records.length ? (<span> </span>) : (<h3>Array is empty</h3>)}
        </div>
    );
}