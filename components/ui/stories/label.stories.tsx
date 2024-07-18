import { Meta, StoryObj } from "@storybook/react";
import { Label as LabelDemo } from "@/components/ui/label";
const meta = {
  title: "Components/ui/label",
  args: {
    children: "Nomad Web",
  },
  component: (args) => <LabelDemo {...args}>{args.children}</LabelDemo>,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<React.ComponentPropsWithRef<"label">>;

export default meta;

type Story = StoryObj<typeof meta>;

//render componente
export const Label: Story = {
  args: {},
};
