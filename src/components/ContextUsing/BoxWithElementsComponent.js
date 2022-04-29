import getBoxStyleObject from "../ManyNumsControl/getBoxStyleObject";
import PositionContext from "./PositionContext";
import RenderPositionComponent from "./RenderPositionComponent";
import int from "./../../utils/int";
import FormPositionInput from "./FormPositionInput";
import {useState} from "react";

export default function BoxWithElementsComponent() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    function mySetContextFields(elementsArray) {
        setX( int(elementsArray[0]) );
        setY( int(elementsArray[1]) );
        setZ( int(elementsArray[2]) );
    }

    return (
        <div style={getBoxStyleObject()}>
            <PositionContext.Provider value={{x: int(x), y: int(y), z: int(z), mySetContextFields: mySetContextFields}}>
                <h2>Using context</h2>
                <RenderPositionComponent/>
                <FormPositionInput/>
            </PositionContext.Provider>
        </div>
    );
}
