'use client'

import { useState } from "react";

interface CollapseFormProps {
    title?: string;
    children: React.ReactNode;
    isOpenDefault?: boolean;
}

export default function CollapseForm({ title="Não especificado", isOpenDefault=false, children }: CollapseFormProps) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className="border rounded-lg p-6">
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="">{title}</h3>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};
