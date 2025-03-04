import Link from "next/link";

import { AlertSection } from "@/app/docs/components/sections/AlertSection";
import { AvatarSection } from "@/app/docs/components/sections/AvatarSection";
import { BadgeSection } from "@/app/docs/components/sections/BadgeSection";
import { BreadcrumbsSection } from "@/app/docs/components/sections/BreadcrumbsSection";
import { ButtonSection } from "@/app/docs/components/sections/ButtonSection";
import { CardSection } from "@/app/docs/components/sections/CardSection";
import { CheckboxSection } from "@/app/docs/components/sections/CheckboxSection";
import { ChipSection } from "@/app/docs/components/sections/ChipSection";
import { CollapseSection } from "@/app/docs/components/sections/CollapseSection";
import { ColorsSection } from "@/app/docs/components/sections/ColorsSection";
import { ContentSection } from "@/app/docs/components/sections/ContentSection";
import { ControlSection } from "@/app/docs/components/sections/ControlSection";
import { DrawerSection } from "@/app/docs/components/sections/DrawerSection";
import { DropdownSection } from "@/app/docs/components/sections/DropdownSection";
import { InputSection } from "@/app/docs/components/sections/InputSection";
import { MenuSection } from "@/app/docs/components/sections/MenuSection";
import { ModalSection } from "@/app/docs/components/sections/ModalSection";
import { PaginationSection } from "@/app/docs/components/sections/PaginationSection";
import { ProgressSection } from "@/app/docs/components/sections/ProgressSection";
import { RadioSection } from "@/app/docs/components/sections/RadioSection";
import { SelectSection } from "@/app/docs/components/sections/SelectSection";
import { SkeletonSection } from "@/app/docs/components/sections/SkeletonSection";
import { SliderSection } from "@/app/docs/components/sections/SliderSection";
import { SwitchSection } from "@/app/docs/components/sections/SwitchSection";
import { TextareaSection } from "@/app/docs/components/sections/TextareaSection";
import { TooltipSection } from "@/app/docs/components/sections/TooltipSection";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Page() {
  return (
    <div className="Content">
      <h1 className="Content-heading1" id="components">
        <Link className="Content-linkHash" href="#components">
          Components List
        </Link>
      </h1>

      <hr className="Content-divider" />
      <h2 className="Content-heading2" id="display">
        <Link className="Content-linkHash" href="#display">
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

      <hr className="Content-divider" />
      <h2 className="Content-heading2" id="feedback">
        <Link className="Content-linkHash" href="#feedback">
          Feedback
        </Link>
      </h2>
      <AlertSection />
      <ModalSection />
      <ProgressSection />
      <SkeletonSection />

      <hr className="Content-divider" />
      <h2 className="Content-heading2" id="input">
        <Link className="Content-linkHash" href="#input">
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

      <hr className="Content-divider" />
      <h2 className="Content-heading2" id="navigation">
        <Link className="Content-linkHash" href="#navigation">
          Navigation
        </Link>
      </h2>
      <DropdownSection />
      <BreadcrumbsSection />
      <DrawerSection />
      <MenuSection />
      <PaginationSection />

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
