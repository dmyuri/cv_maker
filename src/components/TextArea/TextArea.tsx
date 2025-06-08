interface TextAreaProps {
    label?: string;
    name: string;
    placeholder?: string;
}

export default function TextArea({ label, name, placeholder }: TextAreaProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{label}</label>
            <textarea 
                className="resize-none border p-0.5 h-[200px]"
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
};
