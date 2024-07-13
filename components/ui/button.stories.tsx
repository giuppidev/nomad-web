import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { iconCollection } from "@/components/icon/iconCollection";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Components/ui/button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "link"],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "icon", "sm", "lg"],
    },
    iconName: {
      control: { type: "select" },
      options: ["", ...Object.keys(iconCollection)],
      table: {
        category: "Icon",
      },
    },
    iconPlacement: {
      control: { type: "radio" },
      options: ["left", "right"],
      table: {
        category: "Icon",
      },
    },
    children: {
      control: { type: "text" },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "sm",
    disabled: false,
    onClick: action("primary button clicked"),
    children: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("secondary button clicked"),
    children: "Secondary button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("outline button clicked"),
    children: "Outline button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    onClick: action("ghost button clicked"),
    children: "Ghost button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    onClick: action("link button clicked"),
    children: "Link button",
  },
};
