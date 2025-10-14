"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

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
      <motion.textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseClasses} h-32`}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.03 }}
      />
    );
  }

  return (
    <motion.input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      inputMode={type === "text" && name === "phone" ? "numeric" : undefined}
      className={baseClasses}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.03 }}
    />
  );
};

export default CustomInput;
