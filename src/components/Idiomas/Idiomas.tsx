import CollapseForm from "../CollapseForm/CollapseForm";
import FormIdiomas from "./FormIdiomas";

export default function Idiomas() {
    return (
        <div>
            <h1 className="form-title">Idiomas</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormIdiomas />
                </CollapseForm>
            </div>
        </div>
    );
};
