import CollapseForm from "../CollapseForm/CollapseForm";
import FormEducacao from "./FormEducacao";

export default function Educacao() {
    return (
        <div>
            <h1 className="form-title">Educação</h1>    
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormEducacao />
                </CollapseForm>
            </div>
        </div>
    );
};
