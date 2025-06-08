type AddButtonProps = {
    text: string;
    onAdd?: () => void;
};

export default function AddButton({ text, onAdd }: AddButtonProps) {
    return (
        <div>
            <button onClick={onAdd} className="add-btn">+ Adicionar mais {text}</button>
        </div>
    );
};
