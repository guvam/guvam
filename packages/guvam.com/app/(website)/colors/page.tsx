"use client";
import "./page.css";

import type { Oklch } from "culori";
import { clampChroma, converter, formatHex } from "culori";
import type { FC } from "react";
import { useEffect, useState } from "react";

/*

 - username min 5 char
 - disable 10000 most common english words


  /:username
  /:username/:project
  /settings
  /docs
  /blocks/

 */

const PALETTE = [
  { label: 50, value: 25 },
  { label: 100, value: 75 },
  { label: 200, value: 180 },
  { label: 300, value: 260 },
  { label: 400, value: 340 },
  { label: 500, value: 420 },
  { label: 600, value: 500 },
  { label: 700, value: 580 },
  { label: 800, value: 660 },
  { label: 900, value: 740 },
  { label: 950, value: 820 },
];
/*
const HUES = {
  red: 20,
  /!*
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
  x: 360,
*!/
};

const SURFACE_HUES = {
  slate: 250,
  gray: 270,
  zinc: 290,
  neutral: 310,
  stone: 330,
};
*/

const oklch = converter("oklch");

const getMaxChroma = (color: Oklch) => {
  return clampChroma(
    {
      mode: "oklch",
      l: color.l,
      c: 1,
      h: color.h,
    },
    "oklch"
  ).c;
};

const getChromaLevel = (color: Oklch) => {
  return color.c / getMaxChroma(color);
};

const getColor = (palette: number, color: Oklch, chromaLevel: number) => {
  const maxChroma = getMaxChroma({
    mode: "oklch",
    l: (1000 - palette) / 1000,
    c: 1,
    h: color.h,
  });

  return formatHex({
    mode: "oklch",
    l: (1000 - palette) / 1000,
    c: maxChroma * chromaLevel,
    h: color.h,
  });
};

export default function Page() {
  // "#3a694a"
  const [color, setColor] = useState<Oklch>({
    mode: "oklch",
    l: 0.5,
    c: 0.1,
    h: 135,
  });

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div className="Layout-section">
      <div className="Layout-sectionContent">
        <div className="Layout-container List-stack">
          <h1>Colors</h1>

          <label className="Control">
            <div className="Control-label">Color</div>
            <div className="List">
              <input
                type="color"
                className="ColorList-picker"
                value={formatHex(color)}
                onChange={(event) => {
                  const color = oklch(event.currentTarget.value);
                  if (color) {
                    setColor(color);
                  }
                }}
              />
              <input
                type="text"
                className="Input"
                value={formatHex(color)}
                onChange={(event) => {
                  const color = oklch(event.currentTarget.value);
                  if (color) {
                    setColor(color);
                  }
                }}
              />
            </div>
          </label>

          <div className="ColorList">
            <ColorRow color={color} />
          </div>
        </div>
      </div>
    </div>
  );
}

const ColorRow: FC<{
  color: Oklch;
}> = (props) => {
  const chromaLevel = getChromaLevel(props.color);
  console.log({ chromaLevel: Math.floor(chromaLevel * 100) });
  return (
    <div className="ColorList-container">
      {PALETTE.map((p, i) => {
        const hexColor = getColor(p.value, props.color, chromaLevel);
        return (
          <div
            key={i}
            className="ColorList-item"
            style={
              {
                backgroundColor: hexColor,
              } as Record<string, string>
            }
          >
            <div className="ColorList-itemText">
              <p>{p.label}</p>
              <p>{hexColor}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
