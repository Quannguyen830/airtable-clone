import React, { useRef, useState, useEffect } from "react";
import { type CellProps } from "~/interfaces/interfaces";

export const EditableCell = ({ data, className, setIsEditing, focusInput }: CellProps) => {
  const [editingValue, setEditingValue] = useState(data);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      focusInput &&
      inputRef.current
    ) {
      inputRef.current.focus();
    }
  }, [focusInput]);

  const handleSave = () => {
    setIsEditing!(false);

    if (editingValue !== data) {
      console.log("Saving value:", editingValue);
    }
  };

  const handleFocus = () => {
    setIsEditing!(true);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={editingValue}
      className={className}
      onFocus={handleFocus}
      onChange={(e) => setEditingValue(e.target.value)}
      onBlur={handleSave}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSave();
        }
      }}
    />
  );
};

