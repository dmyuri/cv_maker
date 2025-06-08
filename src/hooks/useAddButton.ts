import { JSX, useState } from "react";

export type CollapseFormItem = {
  id: number;
  component: JSX.Element;
};

export default function useAddButton() {
  const [items, setItems] = useState<CollapseFormItem[]>([]);

  const addItem = (component: JSX.Element) => {
    setItems((prev) => [
      ...prev,
      { id: prev.length + 1, component },
    ]);
  };

  return { items, addItem };
}
