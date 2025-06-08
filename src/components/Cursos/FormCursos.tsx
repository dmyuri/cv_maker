import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

export default function FormCursos() {
    return (
        <div className="form">
            <div className="input-grid">
                <Input
                    data={{
                        name: "curso",
                        label: "Curso",
                        placeholder: "Nome do curso",      
                    }}
                />
                <Input
                    data={{
                        name: "instituicao",
                        label: "Instituição",
                        placeholder: "Nome do instituição",      
                    }}
                />
            </div>
            <TextArea
                name="descricao"
                label="Descrição"
                placeholder="Descreva o conteúdo do curso"
            />
        </div>
    );
};
