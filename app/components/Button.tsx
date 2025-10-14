"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "py-[8px] md:py-[12px] px-[16px] md:px-[40px] rounded-[6px] md:rounded-[8px] font-medium md:font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[19px] border-[2px] transition-all duration-300 ease-in cursor-none";
  const variantStyles = {
    primary:
      "bg-primary hover:bg-transparent text-white hover:text-primary border-primary",
    outline:
      "bg-transparent hover:bg-primary border-foreground hover:border-primary hover:text-white",
  }[variant];

  const classes = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    const isPdf = href.endsWith(".pdf");
    return (
      <Link
        href={href}
        target={isPdf ? "_blank" : undefined}
        download={isPdf ? true : undefined}
        className={classes}
      >
        {children || label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children || label}
    </button>
  );
};

export default Button;
