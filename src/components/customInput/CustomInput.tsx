import React, { useId } from "react";
import { S } from "./CustomInput_Styles";

type CustomInputProps = {
  value?: string;
  onChange?: (v: string) => void;
  type?: "text" | "password" | "email";
  label?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
};

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  type = "text",
  label,
  placeholder,
  name,
  required,
  disabled,
  onChange,
}) => {
  const id = useId();

  return (
    <S.InputWrapper>
      <S.Input
        id={id}
        value={value}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputWrapper>
  );
};
