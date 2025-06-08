import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

export default function FormExperiencia() {
    return (
        <div className="form">
            <div className="input-grid">
                <Input data={{
                    name: "cargo",
                    label: "Cargo",
                }}/>
                <Input data={{
                    name: "empresa",
                    label: "Empresa",
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
            </div>
            <TextArea
                name="descricao"
                label="Descrição"   
                placeholder="Descreva as atividades realizados no cargo"
            />
        </div>
    );
};
