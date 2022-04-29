import FormAndListComponent from "./components/FormAndList/FormAndListComponent";
import PasswordControlComponent from "./components/PasswordControl/PasswordControlComponent";
import FormUsingReducerComponent from "./components/ManyNumsControl/FormUsingReducerComponent";
import BoxWithElementsComponent from "./components/ContextUsing/BoxWithElementsComponent";

export default function App() {
    return (
        <div>
            <h1>Second project</h1>
            <BoxWithElementsComponent/>
            <FormUsingReducerComponent/>
            <PasswordControlComponent/>
            <FormAndListComponent/>
        </div>
    );
}
