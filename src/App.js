import FormAndListComponent from "./components/FormAndList/FormAndListComponent";
import PasswordControlComponent from "./components/PasswordControl/PasswordControlComponent";
import FormUsingReducerComponent from "./components/ManyNumsControl/FormUsingReducerComponent";

export default function App() {
    return (
        <div>
            <h1>Second project</h1>
            <FormUsingReducerComponent/>
            <PasswordControlComponent/>
            <FormAndListComponent/>
        </div>
    );
}
