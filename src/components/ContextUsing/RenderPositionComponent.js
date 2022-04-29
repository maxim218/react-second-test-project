import {useContext} from "react";
import PositionContext from "./PositionContext";

export default function RenderPositionComponent() {
    const ctx = useContext(PositionContext);
    return (
        <div>
            <p>X: {ctx.x}</p>
            <p>Y: {ctx.y}</p>
            <p>Z: {ctx.z}</p>
        </div>
    );
}