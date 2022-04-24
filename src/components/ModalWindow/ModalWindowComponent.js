import React from 'react';
import ReactDOM from 'react-dom';
import getBackgroundBoxStyle from "./ModalWindowStyles/getBackgroundBoxStyle";
import getBackgroundWindowStyle from "./ModalWindowStyles/getBackgroundWindowStyle";
import getPaddingAlignStyleObj from "./ModalWindowStyles/getPaddingAlignStyleObj";
import getLabelBtnStyle from "./ModalWindowStyles/getLabelBtnStyle";

export default function ModalWindowComponent(props) {
    const backgroundBoxStyle = getBackgroundBoxStyle();
    const backgroundWindowStyle = getBackgroundWindowStyle();
    const paddingAlignStyleObj = getPaddingAlignStyleObj();
    const labelBtnStyle = getLabelBtnStyle();

    function closeWindowBtnClick() {
        props.onCloseWindow();
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<React.Fragment>
                <div style={backgroundBoxStyle}/>
                <div style={backgroundWindowStyle}>
                    <div style={paddingAlignStyleObj}>
                        <h3>Record adding OK</h3>
                        <p>String content: {props.stringContent}</p>
                        <br/>
                        <span style={labelBtnStyle} onClick={closeWindowBtnClick}>Close window</span>
                    </div>
                </div>
            </React.Fragment>, document.getElementById("modal-message-content-box-id"))}
        </React.Fragment>
    );
}