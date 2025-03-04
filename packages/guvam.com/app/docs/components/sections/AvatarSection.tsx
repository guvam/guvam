import Image from "next/image";
import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const AvatarSection: FC = () => (
  <Components id="avatar">
    <div className="Avatar">
      <Image className="Avatar-image" src="/Kat.jpg" alt="Avatar" width={524} height={524} />
      <span className="Avatar-fallback">CN</span>
    </div>
  </Components>
);
