import {useState} from "react";
import InputFormComponent from "./InputFormComponent";
import ListElementComponent from "./ListElementComponent";

export default function FormAndListComponent() {
    const [records, setRecords] = useState([]);

    function userClickHandler(info) {
        console.log('New element content: ' + info);
        setRecords(previousArray => {
            const buffer = [];
            previousArray.forEach(element => buffer.push(element));
            buffer.push({content: info.trim(), key: "key_" + Math.random() + "_" + Math.random() + "_" + Math.random() + "_key"});
            return buffer;
        });
    }

    return (
        <div style={{background: "wheat", padding: "20px", borderRadius: "8px"}}>
            <InputFormComponent userClickHandler={userClickHandler} />
            <br/>
            {records.map(element => <ListElementComponent content={element.content} key={element.key} />)}
            {records.length ? (<span> </span>) : (<h3>Array is empty</h3>)}
        </div>
    );
}