'use client'

import useAddButton from "@/hooks/useAddButton";
import CollapseForm from "../CollapseForm/CollapseForm";
import FormIdiomas from "./FormIdiomas";
import AddButton from "../AddButton/AddButton";

export default function Idiomas() {
    const { items, addItem } = useAddButton();

    return (
        <div>
            <h1 className="form-title">Idiomas</h1>
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormIdiomas />
                </CollapseForm>
                {items.map((item) => (
                    <CollapseForm key={item.id}>{item.component}</CollapseForm>
                ))}
            </div>
            <AddButton onAdd={() => addItem(<FormIdiomas/>)} text="uma experiência"/>
        </div>
    );
};
