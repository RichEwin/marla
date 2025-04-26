import React from "react";
import "./Button.css";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  color?: string;
  transparent?: boolean;
}

export function Button({
  disabled,
  onClick,
  size = "md",
  className = "",
  children,
  color,
  transparent,
}: ButtonProps){
  const baseClass = "button";
  const sizeClass = size ? `button-${size}` : "";
  const transparentClass = transparent ? "button-transparent" : "";

  const allClasses = [baseClass, sizeClass, transparentClass, className]
    .filter(Boolean)
    .join(" ");

  const style = {
    backgroundColor: transparent ? undefined : color,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
      style={style}
    >
      {children}
    </button>
  );
};

