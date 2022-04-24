import {useState} from "react";
import ModalWindowComponent from "../ModalWindow/ModalWindowComponent";
import React from 'react';

export default function InputFormComponent(props) {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [opened, setOpened] = useState(false);

    function onInformationChange(aEvent) {
        setA(aEvent.target.value);
    }

    function getMessage(content) {
        if(!content)
            return "String is empty"
        if(!content.trim())
            return "String has only spaces"
        return "String: " + content.trim();
    }

    function getColorOfMessage(content) {
        if(!content)
            return 'red';
        if(!content.trim())
            return 'red';
        return '#9ACD32';
    }

    function getBtnStyle(content) {
        return {
            display: "inline-block",
            padding: "6px",
            cursor: "pointer",
            border: "2px " + "solid " + getColorOfMessage(content),
            background: '#BBBBBB'
        };
    }

    function onButtonClick() {
        if(!a)
            return;
        if(!a.trim())
            return;
        setB(a.trim());
        setOpened(true);
        props.userClickHandler(a.trim());
        setA("");
    }

    function onCloseWindow() {
        setOpened(false);
        setB("");
    }

    return (
        <React.Fragment>
            <React.Fragment>
                {opened && <ModalWindowComponent stringContent={b} onCloseWindow={onCloseWindow} />}
            </React.Fragment>

            <div style={{padding: "12px", borderRadius: "6px", background: "#AFEEEE"}}>
                <p>Input string</p>
                <input type={"text"} spellCheck={"false"} autoComplete={"off"} onChange={onInformationChange} value={a} />
                <p style={{fontWeight: 'bold', color: getColorOfMessage(a)}}>{getMessage(a)}</p>
                <div style={getBtnStyle(a)} onClick={onButtonClick}>Append</div>
                <br/>
                <br/>
            </div>
        </React.Fragment>
    );
}