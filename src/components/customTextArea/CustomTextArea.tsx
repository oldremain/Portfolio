import React, { useId } from "react";
import { S } from "./CustomTextArea_Styles";

type CustomTextAreaProps = {
  value?: string;
  onChange?: (v: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
  name?: string;
  required?: boolean;
  disabled?: boolean;
};

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  value,
  label,
  placeholder,
  rows = 5,
  name,
  required,
  disabled,
  onChange,
}) => {
  const id = useId();

  return (
    <S.TextAreaWrapper>
      <S.TextArea
        id={id}
        value={value}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.TextAreaWrapper>
  );
};
