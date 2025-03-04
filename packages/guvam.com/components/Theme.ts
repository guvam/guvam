export type ThemeSettings = {
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
  "--colorScheme": props.colorScheme,
  "--colorTheme": props.colorTheme,
  "--borderRadius": props.borderRadius,
  "--textScale": props.textScale,
  "--textSize": props.textSize,
  "--textDensity": props.textDensity,
  "--textDirection": props.textDirection,
  "--motionReduction": props.motionReduction,
});
