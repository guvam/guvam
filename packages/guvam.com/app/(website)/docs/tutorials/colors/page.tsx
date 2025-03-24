"use client";
import "./page.css";

import type { Oklch } from "culori";
import { converter } from "culori";
import { clampChroma, formatHex } from "culori";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";

const PALETTE = [25, 75, 180, 260, 340, 420, 500, 580, 660, 740, 820];
const PALETTE_INDEX = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const HUES = {
  red: 20,
  /*
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
*/
};

const SURFACE_HUES = {
  slate: 250,
  gray: 270,
  zinc: 290,
  neutral: 310,
  stone: 330,
};

const oklch = converter("oklch");

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

  return formatHex(returnColor);
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
    <>
      <h1>Colors</h1>

      <div className="Grid Grid--column-4">
        <label className="Control">
          <div className="Control-label">Color</div>
          <input
            type="color"
            className="Input"
            defaultValue={formatHex(color)}
            onChange={(event) => {
              const color = oklch(event.currentTarget.value);
              if (color) {
                setColor(color);
              }
            }}
          />
        </label>

        {/*<label className="Control">
          <div className="Control-label">Lightness</div>
          <input
            type="range"
            className="Slider"
            min={0}
            max={1}
            step={0.01}
            onChange={(event) => setHue(Number(event.currentTarget.value))}
          />
        </label>
        <label className="Control">
          <div className="Control-label">Chroma</div>
          <input
            type="range"
            className="Slider"
            min={0}
            max={1}
            step={0.01}
            onChange={(event) => setHue(Number(event.currentTarget.value))}
          />
        </label>
        <label className="Control">
          <div className="Control-label">Hue</div>
          <input
            type="range"
            className="Slider"
            min={0}
            max={1}
            step={0.01}
            onChange={(event) => setHue(Number(event.currentTarget.value))}
          />
        </label>*/}
      </div>

      <div className="ColorList">
        {/*
        {Object.entries(HUES).map(([color, hue]) => {
          return PALETTE.map((p, i) => {
            return `--Color-${color}${PALETTE_INDEX[i]} : ${getColor(p, CHROMA, hue)};`;
          });
        })}
*/}

        {Object.entries(HUES).map(([color, hue], i) => (
          <ColorRow key={i} label={color} chroma={hue} hue={hue} />
        ))}
        {/*        {Object.entries(SURFACE_HUES).map(([color, hue], i) => (
          <ColorRow key={i} label={color} chroma={0.1} hue={hue} />
        ))}*/}
      </div>
    </>
  );
}

const ColorRow: FC<{
  label: string;
  chroma: number;
  hue: number;
}> = (props) => {
  return (
    <div className="ColorList-container">
      <div>{props.label}</div>
      {PALETTE.map((p, i) => (
        <div
          data-color={`--Color-${props.label}${PALETTE_INDEX[i]}`}
          key={i}
          className="ColorList-item"
          style={
            {
              backgroundColor: getColor(p, props.chroma, props.hue),
              color: "transparent",
            } as Record<string, string>
          }
        >
          abcd
        </div>
      ))}
    </div>
  );
};
