import Link from "next/link";

import { AlertSection } from "@/app/(website)/docs/components/sections/AlertSection";
import { AvatarSection } from "@/app/(website)/docs/components/sections/AvatarSection";
import { BadgeSection } from "@/app/(website)/docs/components/sections/BadgeSection";
import { BreadcrumbsSection } from "@/app/(website)/docs/components/sections/BreadcrumbsSection";
import { ButtonSection } from "@/app/(website)/docs/components/sections/ButtonSection";
import { CardSection } from "@/app/(website)/docs/components/sections/CardSection";
import { CheckboxSection } from "@/app/(website)/docs/components/sections/CheckboxSection";
import { ChipSection } from "@/app/(website)/docs/components/sections/ChipSection";
import { CollapseSection } from "@/app/(website)/docs/components/sections/CollapseSection";
import { ColorsSection } from "@/app/(website)/docs/components/sections/ColorsSection";
import { ContentSection } from "@/app/(website)/docs/components/sections/ContentSection";
import { ControlSection } from "@/app/(website)/docs/components/sections/ControlSection";
import { DrawerSection } from "@/app/(website)/docs/components/sections/DrawerSection";
import { DropdownSection } from "@/app/(website)/docs/components/sections/DropdownSection";
import { InputSection } from "@/app/(website)/docs/components/sections/InputSection";
import { MenuSection } from "@/app/(website)/docs/components/sections/MenuSection";
import { ModalSection } from "@/app/(website)/docs/components/sections/ModalSection";
import { PaginationSection } from "@/app/(website)/docs/components/sections/PaginationSection";
import { ProgressSection } from "@/app/(website)/docs/components/sections/ProgressSection";
import { RadioSection } from "@/app/(website)/docs/components/sections/RadioSection";
import { RatingSection } from "@/app/(website)/docs/components/sections/RatingSection";
import { SelectSection } from "@/app/(website)/docs/components/sections/SelectSection";
import { SkeletonSection } from "@/app/(website)/docs/components/sections/SkeletonSection";
import { SliderSection } from "@/app/(website)/docs/components/sections/SliderSection";
import { SwitchSection } from "@/app/(website)/docs/components/sections/SwitchSection";
import { TabsSection } from "@/app/(website)/docs/components/sections/TabsSection";
import { TextareaSection } from "@/app/(website)/docs/components/sections/TextareaSection";
import { TooltipSection } from "@/app/(website)/docs/components/sections/TooltipSection";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Page() {
  return (
    <div className="Content">
      <h1 id="components">
        <Link className="Util-linkHash" href="#components">
          Components List
        </Link>
      </h1>

      <hr />
      <h2 id="display">
        <Link className="Util-linkHash" href="#display">
          Display
        </Link>
      </h2>
      <ColorsSection />
      <ContentSection />
      <AvatarSection />
      <BadgeSection />
      <CardSection />
      <ChipSection />
      <CollapseSection />
      <TooltipSection />

      <hr />
      <h2 id="feedback">
        <Link className="Util-linkHash" href="#feedback">
          Feedback
        </Link>
      </h2>
      <AlertSection />
      <ModalSection />
      <ProgressSection />
      <SkeletonSection />

      <hr />
      <h2 id="input">
        <Link className="Util-linkHash" href="#input">
          Input
        </Link>
      </h2>
      <ControlSection />
      <ButtonSection />
      <InputSection />
      <TextareaSection />
      <SelectSection />
      <SwitchSection />
      <CheckboxSection />
      <RadioSection />
      <SliderSection />
      <RatingSection />

      <hr />
      <h2 id="navigation">
        <Link className="Util-linkHash" href="#navigation">
          Navigation
        </Link>
      </h2>
      <DropdownSection />
      <BreadcrumbsSection />
      <DrawerSection />
      <MenuSection />
      <PaginationSection />
      <TabsSection />

      <BottomNavigation
        previous={{
          url: "/docs/tutorials/roadmap",
          title: "Roadmap",
        }}
        next={{
          url: "/support",
          title: "Support",
        }}
      />
    </div>
  );
}
