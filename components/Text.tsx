import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const align = {
  center: "text-center",
  left: "text-left",
  right: "text-right",
};

const weight = {
  bold: "font-bold",
  medium: "font-medium",
  light: "font-light",
};

const fontSize = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const text = cva("span", {
  variants: {
    size: fontSize,
    align: align,
    weight: weight,
  },
  defaultVariants: {
    size: "md",
    align: "left",
    weight: "medium",
  },
});

interface TextProps extends VariantProps<typeof text> {
  children: React.ReactNode;
  className?: string;
  align?: keyof typeof align;
  weight?: keyof typeof weight;
}

export const Text: React.FC<TextProps> = ({
  className,
  children,
  align,
  weight,
  ...props
}) => {
  const classNames = text({ ...props, className, align, weight });

  return <span className={classNames}>{children}</span>;
};

export default Text;
