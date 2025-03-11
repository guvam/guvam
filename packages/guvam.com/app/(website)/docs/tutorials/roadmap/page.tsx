import { RoadmapContent } from "@/app/(website)/docs/tutorials/roadmap/RoadmapContent";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Page() {
  return (
    <div className="Content">
      <RoadmapContent />

      <BottomNavigation
        previous={{
          url: "/docs/tutorials/getting-started",
          title: "Getting Started",
        }}
        next={{
          url: "/docs/components",
          title: "Components",
        }}
      />
    </div>
  );
}
