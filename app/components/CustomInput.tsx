import React from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomInputProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  required?: boolean;
  textarea?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  textarea = false,
}) => {
  const baseClasses =
    "py-[14px] px-[24px] rounded-[8px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.04)] w-full focus:outline-none focus:border-primary hover:border-primary transition text-[16px] font-bold leading-[26px] capitalize placeholder-foreground text-primary";

  if (textarea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseClasses} h-32`}
      ></textarea>
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      inputMode={type === "text" && name === "phone" ? "numeric" : undefined}
      className={baseClasses}
    />
  );
};

export default CustomInput;
