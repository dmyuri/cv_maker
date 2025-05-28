import './Button.css';

interface ButtonProps {
    className?: string;
    name: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className='', name, onClick }: ButtonProps) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>{name}</button>
    )
};