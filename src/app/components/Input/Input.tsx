import './Input.css';

interface InputProps {
    label: string;
    type: string;
    placeholder?: string;
    name: string;
}

export default function Input({ label, type, placeholder, name }: InputProps) {	
    return (
        <div>
            <div className="input-container">
                <label htmlFor={name}>{label}</label>
                <input 
                    className="input-field"
                    type={type} 
                    placeholder={placeholder} 
                    id={name}
                    name={name}
                />
            </div>
        </div>
    );
}