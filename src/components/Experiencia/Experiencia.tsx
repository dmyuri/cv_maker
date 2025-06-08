'use client'

import useAddButton from "@/hooks/useAddButton";
import CollapseForm from "../CollapseForm/CollapseForm";
import FormExperiencia from "./FormExperiencia";
import AddButton from "../AddButton/AddButton";

export default function Experiencia() {
    const { items, addItem } = useAddButton();

    return (
        <div>
            <h1 className="form-title">Experiência</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormExperiencia />
                </CollapseForm>
                {items.map((item) => (
                    <CollapseForm key={item.id}>{item.component}</CollapseForm>
                ))}
            </div>
            <AddButton onAdd={() => addItem(<FormExperiencia/>)} text="uma experiência"/>
        </div>
    );
};
