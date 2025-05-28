'use client';
import { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import CardForm from "./components/CardForm/CardForm";

export default function Home() {
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function handleNextStep() {
    setStep((prev) => prev + 1);
  }

  return (
    <>
      <Header />
      <div className="home-content">
        <Card>
            <CardForm
              title="Dados Pessoais"
              inputs={
                <>
                  <Input
                    label="Nome Completo"
                    type="text"
                    placeholder="Maria Silva"
                    name="nome"
                  />
                  <Input
                    label="E-mail"
                    type="text"
                    placeholder="maria@email.com"
                    name="email"
                  />
                  <Input
                    label="Celular"
                    type="text"
                    placeholder="(21) 99999-9999"
                    name="celular"
                  />
                  <Input
                    label="Linkedin"
                    type="text"
                    placeholder="linkedin.com/in/maria-silva"
                    name="linkedin"
                  />
                  <Input
                    label="Github"
                    type="text"
                    placeholder="github.com/maria-silva"
                    name="github"
                  />
                </>
              }
              buttons={
                <Button
                  className="btn-next"
                  name="Próximo"
                  onClick={handleNextStep}
                />
              }
              isActive={step == 0 ? true : false}
            />
        </Card>        
      </div>
    </>
  );
}
