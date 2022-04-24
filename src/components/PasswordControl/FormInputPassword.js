import {useState} from "react";
import React from 'react';

export default function FormInputPassword(props) {
    const [a, setA] = useState("");

    function handlerChangeA(aEvent) {
        setA(aEvent.target.value);
    }

    function handlerBtnClick() {
        props.onInpOkBtnClick(a.trim());
    }

    return (
        <React.Fragment>
            <p>Input secret password</p>
            <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={handlerChangeA} value={a} />
            <br/>
            <br/>
            <span onClick={handlerBtnClick} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>Log In</span>
        </React.Fragment>
    );
}