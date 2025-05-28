import './CardForm.css';

interface CardFormProps {
    title: string;
    inputs: React.ReactNode;
    buttons?: React.ReactNode;
    isActive?: boolean;
}

export default function CardForm({ title, inputs, buttons, isActive=false }: CardFormProps) {
    if (!isActive) {
        return null;
    }

    return (
        <div className={`card-form ${isActive}`}>
            <h2 className='card-form-title'>{title}</h2>
            
            <div className='card-form-inputs'>
                {inputs}
            </div>

            <div className='card-form-btns'>
                {buttons}
            </div>
        </div>
    );
}