import getBoxStyleObject from "./getBoxStyleObject";
import {useReducer} from "react";
import {useEffect} from "react";
import int from "./../../utils/int";
import {useState} from "react";

function fieldsReducer(state, action) {
    const obj = {a: state.a, b: state.b, c: state.c};
    if('INPUT_A' === action.type) obj['a'] = action.a;
    if('INPUT_B' === action.type) obj['b'] = action.b;
    if('INPUT_C' === action.type) obj['c'] = action.c;
    return obj;
}

export default function FormUsingReducerComponent() {
    const [fieldsState, dispatchFields] = useReducer(fieldsReducer, {a: "", b: "", c: ""}, undefined);

    const [summa, setSumma] = useState(0);

    function handleA(inpFieldEvent) {
        const data = inpFieldEvent.target.value;
        dispatchFields({type: 'INPUT_A', a: data});
    }

    function handleB(inpFieldEvent) {
        const data = inpFieldEvent.target.value;
        dispatchFields({type: 'INPUT_B', b: data});
    }

    function handleC(inpFieldEvent) {
        const data = inpFieldEvent.target.value;
        dispatchFields({type: 'INPUT_C', c: data});
    }

    useEffect(() => {
        const intA = int(fieldsState.a);
        const intB = int(fieldsState.b);
        const intC = int(fieldsState.c);
        const intSumma = intA + intB + intC;
        setSumma(intSumma);
    }, [fieldsState.a, fieldsState.b, fieldsState.c]);

    return (
        <div style={getBoxStyleObject()}>
            <h2>Many numbers control</h2>
            <div>
                A: <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={handleA} value={fieldsState.a} />
            </div>
            <br/>
            <div>
                B: <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={handleB} value={fieldsState.b} />
            </div>
            <br/>
            <div>
                C: <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={handleC} value={fieldsState.c} />
            </div>
            <br/>
            <div>
                Summa: <b>{summa}</b>
            </div>
        </div>
    );
}