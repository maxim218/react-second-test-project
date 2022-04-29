import {useState} from "react";
import {useContext} from "react";
import PositionContext from "./PositionContext";

export default function FormPositionInput() {
    const [data, setData] = useState("");
    const ctx = useContext(PositionContext);

    function onChangeFunction(myEvent) {
        setData(myEvent.target.value);
    }

    function btnOnClickFunction() {
        const separator = " ";
        const elementsArray = data.trim().split(separator);
        ctx.mySetContextFields(elementsArray);
    }

    return (
        <div>
            <h3>Input 3 numbers</h3>
            <span>Input string</span>
            <br/>
            <br/>
            <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={onChangeFunction} value={data} />
            <br/>
            <br/>
            <button onClick={btnOnClickFunction}>Apply input</button>
        </div>
    );
}