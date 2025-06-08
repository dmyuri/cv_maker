import CollapseForm from "../CollapseForm/CollapseForm";
import FormCursos from "./FormCursos";

export default function Cursos() {
    return (
        <div>
            <h1 className="form-title">Cursos & Certificados</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormCursos />
                </CollapseForm>
            </div>
        </div>
    );
};
