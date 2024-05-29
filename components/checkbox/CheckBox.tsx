"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CheckBoxProps {
  id: string;
  label: string;
}

export function CheckBox({ id, label }: CheckBoxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
