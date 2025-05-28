import StepProgress from '../StepProgress/StepProgress';
import './Card.css';

export default function Card({ children }: { children: React.ReactNode }) {
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
                {children}
            </div>
        </div>
    );
}