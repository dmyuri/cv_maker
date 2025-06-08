interface InputProps {
    data: {
        label?: string;
        name: string;
        placeholder?: string;
        type?: string;
    }
};

export default function Input({ data }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={data.name}>{data.label}</label>
            <input className="border p-0.5" type={data.type} name={data.name} placeholder={data.placeholder} />
        </div>
    );
};
