import "./page.css";

import type { Oklch } from "culori";
import { clampChroma, formatCss } from "culori";
import type { FC } from "react";

const CHROMA = 1;
const PALETTE = [25, 75, 180, 260, 340, 420, 500, 580, 660, 740, 820];
const HUES = {
  red: 20,
  orange: 40,
  amber: 60,
  yellow: 80,
  lime: 100,
  green: 120,
  emerald: 140,
  teal: 160,
  cyan: 180,
  sky: 200,
  blue: 220,
  indigo: 240,
  violet: 260,
  purple: 280,
  fuchsia: 300,
  pink: 320,
  rose: 340,
  xxx: 340,
};

const SURFACE_HUES = {
  slate: 250,
  gray: 270,
  zinc: 290,
  neutral: 310,
  stone: 330,
};

const getColor = (palette: number, chroma: number, hue: number) => {
  const colorClamped = clampChroma(
    {
      mode: "oklch",
      l: (1000 - palette) / 1000,
      c: 1,
      h: hue,
    },
    "oklch"
  );

  const returnColor = {
    mode: "oklch",
    l: colorClamped.l,

    c: colorClamped.c * chroma,
    h: hue,
  } as Oklch;

  console.log(colorClamped, returnColor);

  return returnColor;
};

export default function Page() {
  return (
    <>
      <h1>Colors</h1>
      <div className="ColorList">
        {Object.entries(HUES).map(([color, hue], i) => (
          <ColorRow key={i} label={color} chroma={CHROMA} hue={hue} />
        ))}
        {Object.entries(SURFACE_HUES).map(([color, hue], i) => (
          <ColorRow key={i} label={color} chroma={0.15} hue={hue} />
        ))}
      </div>
    </>
  );
}

const ColorRow: FC<{
  label: string;
  chroma: number;
  hue: number;
}> = (props) => (
  <div className="ColorList-container">
    <div>{props.label}</div>
    {PALETTE.map((p, i) => (
      <div
        key={i}
        className="ColorList-item"
        style={
          {
            backgroundColor: formatCss(getColor(p, props.chroma, props.hue)),
            color: "transparent",
          } as Record<string, string>
        }
      >
        abcd
      </div>
    ))}
  </div>
);
