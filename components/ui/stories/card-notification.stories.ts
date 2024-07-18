import { Meta, StoryObj } from "@storybook/react";
import { CardDemoNotification } from "../demo/card-notification-demo";

const meta = {
  title: "Components/ui/card",
  component: CardDemoNotification,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardDemoNotification>;

type Story = StoryObj<typeof meta>;

export const CardNotification: Story = {
  args: {},
};
export default meta;
