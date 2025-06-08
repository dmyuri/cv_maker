import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

export default function FormEducacao() {
    return (
        <div className="form">
            <div className="input-grid">
                <Input data={{
                    name: "instituicao",
                    label: "Instituição",
                }}/>
                <Input data={{
                    name: "curso",
                    label: "Curso",
                    placeholder: "Sistemas de Informação",
                }}/>
                <Input data={{
                    name: "dataInicio",
                    label: "Data Início",
                    type: "date",
                }}/>
                <Input data={{
                    name: "dataFim",
                    label: "Data Fim",
                    type: "date",
                }}/>
                <Input data={{
                    name: "cidade",
                    label: "Cidade",
                }}/>
            </div>
            <TextArea 
                name="descricao"
                label="Descrição"
                placeholder="Graduado com grandes honrarias."
            />
        </div>
    );
};
