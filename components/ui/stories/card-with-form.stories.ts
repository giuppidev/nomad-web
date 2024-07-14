import { Meta, StoryObj } from "@storybook/react";
import { CardWithForm as CardDemoWithForm } from "../demo/card-with-form";

const meta = {
  title: "Components/ui/card",
  component: CardDemoWithForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardDemoWithForm>;

type Story = StoryObj<typeof meta>;

export const CardWithForm: Story = {
  args: {},
};
export default meta;
