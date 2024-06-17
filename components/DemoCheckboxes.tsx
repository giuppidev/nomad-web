import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const DemoCheckboxes = () => {
  return (
    <div className="space-y-8">
      <fieldset className="border p-4">
        <legend className="text-sm">Inactive</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox disabled id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <Checkbox className="bg-fuscous-gray-700">Button</Checkbox>
          <Checkbox className="bg-shark-950">Button</Checkbox>
          <Checkbox className="bg-silver-300 border-2 border-star-dust-400">
            Button
          </Checkbox>
        </div>
      </fieldset>
      <fieldset className="border p-4">
        <legend className="text-sm">Active</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox disabled id="1" indicator="show" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="border p-4">
        <legend className="text-sm">Inactivated</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="hide" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="hide" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="hide" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="1" indicator="hide" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox disabled id="1" indicator="hide" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Label
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
