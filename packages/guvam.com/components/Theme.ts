import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export type ThemeSettings = {
  theme: "calm" | "focus" | "fashion";
  colorScheme: "normal" | "light" | "dark";
  colorTheme: "blue" | "green" | "pink" | "lime" | "red" | "yellow";
  borderRadius: "0" | "0.25rem" | "0.5rem" | "0.75rem" | "1rem";
  textScale: "1.125" | "1.250" | "1.333" | "1.500" | "1.618";
  textSize: "12px" | "14px" | "16px" | "18px" | "20px";
  textDensity: "0.8" | "1" | "1.2";
  textDirection: "unset" | "ltr" | "rtl";
  motionReduction: "auto" | "enabled" | "disabled";
};

export const THEME_INITIAL_VALUES: ThemeSettings = {
  theme: "focus",
  colorScheme: "light",
  colorTheme: "blue",
  borderRadius: "0.5rem",
  textScale: "1.250",
  textSize: "16px",
  textDensity: "1",
  textDirection: "unset",
  motionReduction: "auto",
};

export const getSettingsVariables = (props: ThemeSettings) => ({
  "--theme": props.theme,
  "--colorScheme": props.colorScheme,
  "--colorTheme": props.colorTheme,
  "--borderRadius": props.borderRadius,
  "--textScale": props.textScale,
  "--textSize": props.textSize,
  "--textDensity": props.textDensity,
  "--textDirection": props.textDirection,
  "--motionReduction": props.motionReduction,
});

export const getThemeSettings = (cookieStore: ReadonlyRequestCookies) =>
  cookieStore
    .get("theme")
    ?.value.split(" ")
    .reduce(
      (previousValue, currentValue) => {
        const [key, value] = currentValue.split(":") as [keyof ThemeSettings, never];
        previousValue[key] = value;
        return previousValue;
      },
      { ...THEME_INITIAL_VALUES }
    ) ?? THEME_INITIAL_VALUES;
