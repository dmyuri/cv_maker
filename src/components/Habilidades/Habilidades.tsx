import CollapseForm from "../CollapseForm/CollapseForm";
import FormHabilidades from "./FormHabilidades";

export default function Habilidades() {
    return (
        <div>
            <h1 className="form-title">Habilidades</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormHabilidades />
                </CollapseForm>
            </div>
        </div>
    );
};
