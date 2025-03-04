"use client";

import "./HeaderSettings.css";

import { Popover } from "@guvam/components";
import type { FC } from "react";
import { GearFill } from "react-bootstrap-icons";

import type { ThemeSettings } from "@/components/Theme";
import { getSettingsVariables } from "@/components/Theme";

export const HeaderSettings: FC<{ themeSettings: ThemeSettings }> = (props) => {
  return (
    <Popover id="settings">
      <button
        className="Button Button--icon Button--type-text four-column-summary"
        aria-label="Color theme selection"
      >
        <GearFill />
      </button>
      <form
        className="Dropdown Dropdown--modal Dropdown--right Popover"
        ref={(ref) => {
          if (ref) {
            Object.entries(props.themeSettings).forEach(([name, value]) => {
              const item = ref.elements.namedItem(name);
              if (item instanceof RadioNodeList) {
                item.value = value;
              }
            });
          }
        }}
        onSubmit={(ev) => ev.preventDefault()}
        onChange={(event) => {
          const rootElement = document.documentElement;
          const form = new FormData(event.currentTarget);

          const cookies: string[] = [];
          const formValues: Record<string, string> = {};
          Object.entries(props.themeSettings).forEach(([key, valueSettings]) => {
            formValues[key] = (form.get(key) as string) ?? valueSettings;
            cookies.push(`${key}:${formValues[key]}`);
          });
          document.cookie = `theme=${cookies.join(" ")}; path=/; max-age=31536000`;

          const themeSettings = { ...props.themeSettings, ...formValues };
          Object.entries(getSettingsVariables(themeSettings)).forEach(([key, value]) => {
            rootElement.style.setProperty(key, value);
          });

          rootElement.classList.forEach((previousColor) => {
            if (previousColor.startsWith("Theme--color-")) {
              rootElement.classList.replace(
                previousColor,
                `Theme--color-${themeSettings.colorTheme}`
              );
            }
          });
        }}
      >
        <menu className="Menu Menu--wider">
          <div className="Menu-block">
            <h2>Color scheme</h2>
            <div className="Menu-list">
              <label className="Menu-button">
                <input type="radio" name="colorScheme" value="normal" className="Util-hidden" />
                <span>normal</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorScheme" value="light" className="Util-hidden" />
                <span>light</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorScheme" value="dark" className="Util-hidden" />
                <span>dark</span>
              </label>
            </div>
          </div>

          <div className="Menu-block">
            <h2>Color Theme</h2>
            <div className="Menu-list">
              <label className="Menu-button">
                <input type="radio" name="colorTheme" value="blue" className="Util-hidden" />
                <div className="ColorSelect-color Theme--color-blue"></div>
                <span>Blue</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorTheme" value="green" className="Util-hidden" />
                <div className="ColorSelect-color Theme--color-green"></div>
                <span>Green</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorTheme" value="pink" className="Util-hidden" />
                <div className="ColorSelect-color Theme--color-pink"></div>
                <span>Pink</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorTheme" value="lime" className="Util-hidden" />
                <div className="ColorSelect-color Theme--color-lime"></div>
                <span>Lime</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorTheme" value="red" className="Util-hidden" />
                <div className="ColorSelect-color Theme--color-red"></div>
                <span>Red</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="colorTheme" value="yellow" className="Util-hidden" />
                <div className="ColorSelect-color Theme--color-yellow"></div>
                <span>Yellow</span>
              </label>
            </div>
          </div>

          <div className="Menu-block">
            <h2>Border radius</h2>
            <div className="Menu-list Menu-list--short">
              <label className="Menu-button">
                <input type="radio" name="borderRadius" value="0" className="Util-hidden" />
                <span>0</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="borderRadius" value="0.25rem" className="Util-hidden" />
                <span>0.25</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="borderRadius" value="0.5rem" className="Util-hidden" />
                <span>0.5</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="borderRadius" value="0.75rem" className="Util-hidden" />
                <span>0.75</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="borderRadius" value="1rem" className="Util-hidden" />
                <span>1</span>
              </label>
            </div>
          </div>

          <div className="Menu-block">
            <h2>Text scale</h2>
            <div className="Menu-list Menu-list--short">
              <label className="Menu-button">
                <input type="radio" name="textScale" value="1.125" className="Util-hidden" />
                <span>1.125</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textScale" value="1.250" className="Util-hidden" />
                <span>1.250</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textScale" value="1.333" className="Util-hidden" />
                <span>1.333</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textScale" value="1.500" className="Util-hidden" />
                <span>1.500</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textScale" value="1.618" className="Util-hidden" />
                <span>1.618</span>
              </label>
            </div>
          </div>

          <div className="Menu-block">
            <h2>Text size</h2>
            <div className="Menu-list Menu-list--short">
              <label className="Menu-button">
                <input type="radio" name="textSize" value="12px" className="Util-hidden" />
                <span>12</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textSize" value="14px" className="Util-hidden" />
                <span>14</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textSize" value="16px" className="Util-hidden" />
                <span>16</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textSize" value="18px" className="Util-hidden" />
                <span>18</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textSize" value="20px" className="Util-hidden" />
                <span>20</span>
              </label>
            </div>
          </div>

          {/*<div className="Menu-block">
            <h2>Text density</h2>
            <div className="Menu-list">
              <label className="Menu-button">
                <input type="radio" name="textDensity" value="0.8" className="Util-hidden" />
                <span>compact</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textDensity" value="1" className="Util-hidden" />
                <span>default</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textDensity" value="1.2" className="Util-hidden" />
                <span>comfortable</span>
              </label>
            </div>
          </div>*/}

          <div className="Menu-block">
            <h2>Text direction</h2>
            <div className="Menu-list">
              <label className="Menu-button">
                <input type="radio" name="textDirection" value="unset" className="Util-hidden" />
                <span>unset</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textDirection" value="ltr" className="Util-hidden" />
                <span>ltr</span>
              </label>
              <label className="Menu-button">
                <input type="radio" name="textDirection" value="rtl" className="Util-hidden" />
                <span>rtl</span>
              </label>
            </div>
          </div>

          {/*<div className="Menu-block">
            <h2>Motion reduction</h2>
            <div className="Menu-list">
              <label className="Menu-button">
                <input type="radio" name="motionReduction" value="auto" className="Util-hidden" />
                <span>auto</span>
              </label>
              <label className="Menu-button">
                <input
                  type="radio"
                  name="motionReduction"
                  value="enabled"
                  className="Util-hidden"
                />
                <span>enabled</span>
              </label>
              <label className="Menu-button">
                <input
                  type="radio"
                  name="motionReduction"
                  value="disabled"
                  className="Util-hidden"
                />
                <span>disabled</span>
              </label>
            </div>
          </div>*/}
        </menu>
      </form>
    </Popover>
  );
};
