import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Icon from "@/components/icon/Icon";

export const DemoButtons = () => {
  return (
    <div className="space-y-8">
      <fieldset className="border p-4">
        <legend className="text-sm">Primary</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          {/* Text Only */}
          <Button size="lg">Button</Button>
          <Button size="lg" className="bg-fuscous-gray-700">
            Button
          </Button>
          <Button size="lg" className="bg-shark-950">
            Button
          </Button>
          <Button
            size="lg"
            className="bg-silver-300 border-2 border-star-dust-400"
          >
            Button
          </Button>
          <Button size="lg" disabled>
            Button
          </Button>

          {/* Text + Icon */}
          <Button size="lg" iconName="arrowRightCircle" iconPlacement="right">
            Button{" "}
          </Button>
          <Button
            size="lg"
            className="bg-fuscous-gray-700"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button{" "}
          </Button>
          <Button
            size="lg"
            className="bg-shark-950"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button{" "}
          </Button>
          <Button
            size="lg"
            className="bg-silver-300 border-2 border-star-dust-400"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button{" "}
          </Button>
          <Button
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
            disabled
          >
            Button{" "}
          </Button>
          {/* Only Icon */}
          <Button
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
          />
          <Button
            size="icon"
            className="bg-fuscous-gray-700"
            iconName="arrowRightCircle"
            iconPlacement="right"
          />
          <Button
            size="icon"
            iconName="arrowRightCircle"
            iconPlacement="right"
            className="bg-shark-950"
          />
          <Button
            size="icon"
            className="bg-silver-300 border-2 border-star-dust-400"
            iconName="arrowRightCircle"
            iconPlacement="right"
          />
          <Button
            size="icon"
            iconName="arrowRightCircle"
            iconPlacement="right"
            disabled
          />
        </div>
      </fieldset>
      <fieldset className="border p-4">
        <legend className="text-sm">Secondary</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          {/* Text Only */}
          <Button variant="secondary" size="lg">
            Button
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-fuscous-gray-700"
          >
            Button
          </Button>
          <Button variant="secondary" size="lg" className="text-shark-950">
            Button
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-silver-300 border-2 border-star-dust-400"
          >
            Button
          </Button>
          <Button variant="secondary" size="lg" disabled>
            Button
          </Button>

          {/* Text + Icon */}
          <Button
            variant="secondary"
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-fuscous-gray-700 fill-fuscous-gray-700"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button2
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-shark-950 fill-shark-950"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button{" "}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="text-silver-300 fill-silver-300 border-2 border-star-dust-400"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="secondary"
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
            disabled
          >
            Button{" "}
          </Button>
          {/* Only Icon */}
          <Button
            variant="secondary"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
          />
          <Button
            variant="secondary"
            size="icon"
            iconName="arrowRightCircle"
            iconPlacement="right"
            className="bg-selago-100 fill-fuscous-gray-700"
          />
          <Button
            variant="secondary"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
            className="bg-selago-100 fill-shark-950"
          />
          <Button
            variant="secondary"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
            className="bg-selago-100 fill-silver-300 border-2 border-star-dust-400"
          />
          <Button variant="secondary" size="icon" disabled>
            <Icon iconName="arrowRightCircle" className="fill-star-dust-400" />
          </Button>
        </div>
      </fieldset>
      <fieldset className="border p-4">
        <legend className="text-sm">Outlined</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          {/* Text Only */}
          <Button variant="outline" size="lg">
            Button
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-fuscous-gray-700 ring-fuscous-gray-700"
          >
            Button
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-shark-950 ring-shark-950"
          >
            Button
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-silver-300 ring-star-dust-400"
          >
            Button
          </Button>
          <Button variant="outline" size="lg" disabled>
            Button
          </Button>

          {/* Text + Icon */}
          <Button
            variant="outline"
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-fuscous-gray-700 fill-fuscous-gray-700 ring-fuscous-gray-700"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button2
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-shark-950 fill-shark-950 ring-shark-950"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button{" "}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-silver-300 fill-silver-300 ring-star-dust-400"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
            disabled
          >
            Button{" "}
          </Button>
          {/* Only Icon */}
          <Button
            variant="outline"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
          />
          <Button
            variant="outline"
            size="icon"
            iconName="arrowRightCircle"
            iconPlacement="right"
            className="bg-selago-100 fill-fuscous-gray-700 ring-fuscous-gray-700"
          />
          <Button
            variant="outline"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
            className="bg-selago-100 fill-shark-950 ring-shark-950"
          />
          <Button
            variant="outline"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
            className="bg-selago-100 fill-silver-300 ring-star-dust-400"
          />
          <Button variant="outline" size="icon" disabled>
            <Icon iconName="arrowRightCircle" className="fill-star-dust-400" />
          </Button>
        </div>
      </fieldset>
      <fieldset className="border p-4">
        <legend className="text-sm">Ghost Button</legend>
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
          <Label className="text-zinc-500">Default</Label>
          <Label className="text-zinc-500">Hover</Label>
          <Label className="text-zinc-500">Pressed</Label>
          <Label className="text-zinc-500">Focused</Label>
          <Label className="text-zinc-500">Disabled</Label>

          {/* Text Only */}
          <Button variant="ghost" size="lg">
            Button
          </Button>
          <Button variant="ghost" size="lg" className="text-fuscous-gray-700">
            Button
          </Button>
          <Button variant="ghost" size="lg" className="text-shark-950">
            Button
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-silver-300 ring-star-dust-400 ring-2"
          >
            Button
          </Button>
          <Button variant="ghost" size="lg" disabled>
            Button
          </Button>

          {/* Text + Icon */}
          <Button
            variant="ghost"
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-fuscous-gray-700 fill-fuscous-gray-700"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-shark-950 fill-shark-950"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button{" "}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-silver-300 fill-silver-300 ring-2 ring-star-dust-400"
            iconName="arrowRightCircle"
            iconPlacement="right"
          >
            Button
          </Button>
          <Button
            variant="ghost"
            size="lg"
            iconName="arrowRightCircle"
            iconPlacement="right"
            disabled
          >
            Button{" "}
          </Button>
          {/* Only Icon */}
          <Button
            variant="ghost"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
          />
          <Button
            variant="ghost"
            size="icon"
            iconName="arrowRightCircle"
            iconPlacement="right"
            className="fill-fuscous-gray-700"
          />
          <Button
            variant="ghost"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
            className="fill-shark-950"
          />
          <Button
            variant="ghost"
            iconName="arrowRightCircle"
            iconPlacement="right"
            size="icon"
            className="fill-silver-300 ring-2 ring-star-dust-400"
          />
          <Button variant="ghost" size="icon" disabled>
            <Icon iconName="arrowRightCircle" className="fill-star-dust-400" />
          </Button>
        </div>
      </fieldset>
    </div>
  );
};
