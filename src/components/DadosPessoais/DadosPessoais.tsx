import Input from "../Input/Input";

export default function DadosPessoais() {
    return (
        <div>
            <h1 className="form-title">Dados Pessoais</h1>
            <div className="input-grid">
                <Input data={{
                    label: "Nome completo",
                    name: "nome",
                    placeholder: "Maria Silva",
                }}/>
                <Input data={{
                    label: "Cargo",
                    name: "cargo",
                    placeholder: "Desenvolvedora Frontend",
                }}/>
                <Input data={{
                    label: "E-mail",
                    name: "email",
                    placeholder: "maria@email.com",
                }}/>
                <Input data={{
                    label: "Telefone",
                    name: "telefone",
                    placeholder: "21999990000",
                }}/>
                <Input data={{
                    label: "Linkedin",
                    name: "linkedin",
                    placeholder: "linkedin.com/in/mariasilva",
                }}/>
                <Input data={{
                    label: "Github",
                    name: "github",
                    placeholder: "github.com/mariasilva",
                }}/>
                <Input data={{
                    label: "Portfolio",
                    name: "portfolio",
                    placeholder: "meuportfolio.com.br",
                }}/>
            </div>
        </div>
    );
}