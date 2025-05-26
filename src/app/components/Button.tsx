interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className='', onClick, children }: ButtonProps) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    )
};