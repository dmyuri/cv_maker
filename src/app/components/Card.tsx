import { title } from "process";
import CardForm from "./CardForm";
import Input from "./Input";
import StepProgress from "./StepProgress";

interface CardProps {
    title: string;
    inputs: React.ReactNode;
    buttons?: React.ReactNode;
}

export default function Card({ title, inputs, buttons }: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-top">
                    <StepProgress
                        steps={[
                            { title: 'Dados Pessoais', icon: <i className="icon-user" /> },
                            { title: 'Experiência', icon: <i className="icon-briefcase" /> },
                            { title: 'Formação acadêmica', icon: <i className="icon-graduation-cap" /> },
                            { title: 'Informações adicionais', icon: <i className="icon-star" /> },
                        ]} 
                        currentStep={0}
                    />
                </div>
                <CardForm 
                    title={title}
                    inputs={inputs}
                    buttons={buttons}
                    isActive
                />
            </div>
        </div>
    );
}