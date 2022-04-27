import {useState} from "react";
import React from 'react';
import {useEffect} from "react";

export default function FormInputPassword(props) {
    const [a, setA] = useState("");
    const [len, setLen] = useState(0);

    function handlerChangeA(aEvent) {
        setA(aEvent.target.value);
    }

    function handlerBtnClick() {
        props.onInpOkBtnClick(a.trim());
    }

    useEffect(() => {
        const integerLength = a.trim().length;
        console.log("integerLength: " + integerLength);
        setLen(integerLength);
    }, [a]);

    return (
        <React.Fragment>
            <p>Input secret password</p>
            <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={handlerChangeA} value={a} />
            <br/>
            <br/>
            Length: {len}
            <br/>
            <br/>
            <span onClick={handlerBtnClick} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>Log In</span>
        </React.Fragment>
    );
}