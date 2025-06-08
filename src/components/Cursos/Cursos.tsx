'use client'

import useAddButton from "@/hooks/useAddButton";
import CollapseForm from "../CollapseForm/CollapseForm";
import FormCursos from "./FormCursos";
import AddButton from "../AddButton/AddButton";

export default function Cursos() {
    const { items, addItem } = useAddButton();

    return (
        <div>
            <h1 className="form-title">Cursos & Certificados</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormCursos />
                </CollapseForm>
                {items.map((item) => (
                    <CollapseForm key={item.id}>{item.component}</CollapseForm>
                ))}
            </div>
            <AddButton onAdd={() => addItem(<FormCursos/>)} text="uma experiência"/>
        </div>
    );
};
