import '../styles/CardForm.css';

interface CardFormProps {
    title: string;
    inputs: React.ReactNode;
    buttons?: React.ReactNode;
    isActive?: boolean;
}

export default function CardForm({ title, inputs, buttons, isActive=false }: CardFormProps) {
    return (
        <div className="card-form">
            <h2 className={`card-form-title ${isActive}`}>{title}</h2>
            {inputs}
            {buttons}
        </div>
    );
}