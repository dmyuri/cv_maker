'use client'

import useAddButton from "@/hooks/useAddButton";
import CollapseForm from "../CollapseForm/CollapseForm";
import FormEducacao from "./FormEducacao";
import AddButton from "../AddButton/AddButton";

export default function Educacao() {
    const { items, addItem } = useAddButton();

    return (
        <div>
            <h1 className="form-title">Educação</h1>    
            <div className="flex flex-col gap-2.5">
                <CollapseForm>
                    <FormEducacao />
                </CollapseForm>
                {items.map((item) => (
                    <CollapseForm key={item.id}>{item.component}</CollapseForm>
                ))}
            </div>
            <AddButton onAdd={() => addItem(<FormEducacao/>)} text="uma experiência"/>
        </div>
    );
};
