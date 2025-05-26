import Card from "./components/Card";
import Input from "./components/Input";

export default function Home() {
  return (
    <div className="home">
      <div className="app-content">
        <h1 className="app-name">Cv Maker</h1>
        <p className="app-description">Gerador de currículo online.</p>
      </div>

      <Card
        title="Dados Pessoais"
        inputs={
          <div className="card-inputs">
            <Input
              label="Nome Completo"
              type="text"
              placeholder="Informe seu nome completo"
              name="nome"
            />
            <Input
              label="E-mail"
              type="text"
              placeholder="Informe seu e-mail"
              name="email"
            />
            <Input
              label="Nome Completo"
              type="text"
              placeholder="Digite seu nome completo"
              name="nome"
            />
          </div>
        }
      />        
    </div>
  );
}
