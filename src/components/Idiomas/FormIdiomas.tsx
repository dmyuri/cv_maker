import Input from "../Input/Input";

export default function FormIdiomas() {
    return (
        <div className="form">
            <div className="input-grid">
                <Input data={{
                    name: "idioma",
                    label: "Idioma",
                }}
                />
                <Input data={{
                    name: "nivel",
                    label: "Nível",
                    placeholder: "Básico",
                }}
                />
            </div>
        </div>
    );
};
