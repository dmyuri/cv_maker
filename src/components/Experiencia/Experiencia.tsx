import CollapseForm from "../CollapseForm/CollapseForm";
import FormExperiencia from "./FormExperiencia";

export default function Experiencia() {
    return (
        <div>
            <h1 className="form-title">Experiência</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormExperiencia />
                </CollapseForm>
            </div>
        </div>
    );
};
