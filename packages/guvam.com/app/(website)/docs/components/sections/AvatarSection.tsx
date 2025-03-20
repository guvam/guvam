import Image from "next/image";
import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const AvatarSection: FC = () => (
  <ComponentBlock id="avatar">
    <div className="Avatar">
      <Image
        className="Avatar-image"
        src="/blocks/avatars/avatar-2.jpg"
        alt="Avatar"
        width={524}
        height={524}
      />
      <span className="Avatar-fallback">CN</span>
    </div>
  </ComponentBlock>
);
