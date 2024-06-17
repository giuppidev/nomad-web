"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  {
    variants: {
      variant: {
        active: "",
        inactive: "",
        inactivated: "",
      },
      indicator: {
        show: "",
        hide: "",
      },
    },
    defaultVariants: {
      variant: "inactive",
      indicator: "show",
    },
  },
);

type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  variant?: VariantProps<typeof checkboxVariants>["variant"];
  indicator?: VariantProps<typeof checkboxVariants>["indicator"];
  className?: string;
}

const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>(
  ({ className, variant, indicator, ...props }, ref) => (
    <CheckboxPrimitive.Root
      className={cn(checkboxVariants({ className, ...props }))}
      ref={ref}
      {...props}
    >
      {indicator === "show" && (
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
