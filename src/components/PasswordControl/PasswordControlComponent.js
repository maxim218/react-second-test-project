import FormInputPassword from "./FormInputPassword";
import getSecretPasswordString from "./getSecretPasswordString";
import {useEffect, useState} from "react";

export default function PasswordControlComponent() {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const secretPassword = getSecretPasswordString();
        const storedPas = localStorage.getItem('PASSWORD');
        const correctPasswordFlag = (secretPassword === storedPas);
        setAdmin(correctPasswordFlag);
    }, []);

    function onInpOkBtnClick(secretWord) {
        localStorage.setItem('PASSWORD', secretWord);
        const secretPassword = getSecretPasswordString();
        const storedPas = localStorage.getItem('PASSWORD');
        const correctPasswordFlag = (secretPassword === storedPas);
        setAdmin(correctPasswordFlag);
    }

    return (
        <div style={{background: 'wheat', padding: '20px', borderRadius: '8px', marginBottom: "12px"}}>
            <h3>Control password</h3>
            {admin ? <h2>You are admin</h2> : <FormInputPassword onInpOkBtnClick={onInpOkBtnClick} />}
        </div>
    );
}