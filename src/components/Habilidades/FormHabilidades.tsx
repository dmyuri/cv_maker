import Input from "../Input/Input";

export default function FormHabilidades() {
    return (
        <div className="form">
            <div className="input-grid">
                <Input 
                    data={{
                        name: "habilidade",
                        label: "Habilidade",
                    }}
                />
            </div>
        </div>
    );
};
