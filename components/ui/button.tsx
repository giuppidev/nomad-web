import * as React from "react";
import Icon from "@/components/icon/Icon";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IconName } from "@/components/icon/iconCollection";

const buttonVariants = cva(
  "fill-alabaster-50 inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        primary:
          "bg-boulder-500 text-alabaster-50 hover:bg-fuscous-gray-700 active:bg-shark-950 focus:bg-silver-300 focus:ring focus:ring-star-dust-400 focus-visible:ring-star-dust-400 disabled:bg-alto-200 disabled:text-star-dust-400 disabled:fill-star-dust-400",
        secondary:
          "bg-selago-100 text-boulder-500 hover:text-fuscous-gray-700 active:text-shark-950 fill-boulder-500 hover:fill-fuscous-gray-700 active:fill-shark-950 focus:ring focus:text-silver-300 focus:fill-silver-300 focus:ring-star-dust-400 focus-visible:ring-star-dust-400 disabled:bg-alto-200 disabled:text-star-dust-400 disabled:fill-star-dust-400",
        outline:
          "ring-2 ring-star-dust-400 focus:outline-none hover:ring-fuscous-gray-700 active:ring-shark-950 focus:ring-star-dust-400 focus-visible:ring-star-dust-400 focus:text-silver-300 focus:fill-silver-300 bg-selago-100 text-boulder-500 hover:text-fuscous-gray-700 active:text-shark-950 fill-boulder-500 hover:fill-fuscous-gray-700 active:fill-shark-950 disabled:ring-0 disabled:bg-alto-200 disabled:text-star-dust-400 disabled:fill-star-dust-400",
        ghost:
          "bg-white text-boulder-500 hover:text-fuscous-gray-700 active:ring-0 active:text-shark-950 fill-boulder-500 hover:fill-fuscous-gray-700 active:fill-shark-950 focus:fill-silver-300 focus:ring-2 focus:ring-star-dust-400 focus-visible:ring-2 focus-visible:ring-star-dust-400 focus:text-silver-300 disabled:star-dust-400 disabled:text-star-dust-400 disabled:fill-star-dust-400",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface IconProps {
  iconName: IconName;
  iconPlacement: "left" | "right";
}

interface IconRefProps {
  iconName?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      iconName,
      iconPlacement,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconName && iconPlacement === "left" && (
          <Icon
            iconName={iconName}
            className={`${size !== "icon" ? "mr-2" : null}`}
          />
        )}
        <Slottable>{props.children}</Slottable>
        {iconName && iconPlacement === "right" && (
          <Icon
            iconName={iconName}
            className={`${size !== "icon" ? "ml-2" : null}`}
          />
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
