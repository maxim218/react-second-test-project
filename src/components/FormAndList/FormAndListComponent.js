import {useState} from "react";
import InputFormComponent from "./InputFormComponent";
import ListComponent from "./ListComponent";

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

    function deleteElementByKey(keyString) {
        setRecords(previousArray => {
            const buffer = [];
            previousArray.forEach(element => {
                const prohibitedFlag = (keyString.trim() === element.key.trim());
                if (!prohibitedFlag) buffer.push(element)
            });
            return buffer;
        });
    }

    return (
        <div style={{background: "wheat", padding: "20px", borderRadius: "8px"}}>
            <InputFormComponent userClickHandler={userClickHandler} />
            <br/>
            <ListComponent records={records} deleteElementByKey={deleteElementByKey} />
        </div>
    );
}