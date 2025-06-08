import TextArea from "../TextArea/TextArea";

export default function Resumo() {
    return (
        <div>
            <h1 className="form-title">Resumo Profissional</h1>
            <TextArea 
                name="resumo"
                placeholder="Desenvolvedora com 2 anos de experiência e diversos projetos pessoais..."
            />
        </div>
    );
};
