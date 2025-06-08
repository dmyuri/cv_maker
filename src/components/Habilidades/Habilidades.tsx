'use client'

import useAddButton from "@/hooks/useAddButton";
import CollapseForm from "../CollapseForm/CollapseForm";
import FormHabilidades from "./FormHabilidades";
import AddButton from "../AddButton/AddButton";

export default function Habilidades() {
    const { items, addItem } = useAddButton();

    return (
        <div>
            <h1 className="form-title">Habilidades</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormHabilidades />
                </CollapseForm>
                {items.map((item) => (
                    <CollapseForm key={item.id}>{item.component}</CollapseForm>
                ))}
            </div>
            <AddButton onAdd={() => addItem(<FormHabilidades/>)} text="uma experiência"/>
        </div>
    );
};
