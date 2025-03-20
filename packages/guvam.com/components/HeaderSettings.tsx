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

      <div className="Dropdown Dropdown--modal Dropdown--right Popover">
        <SettingsForm themeSettings={props.themeSettings} />
      </div>
    </Popover>
  );
};

export const SettingsForm: FC<{ themeSettings: ThemeSettings }> = (props) => {
  return (
    <form
      ref={(node) => {
        if (node !== null) {
          Object.entries(props.themeSettings).forEach(([name, value]) => {
            const item = node.elements.namedItem(name);
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

        rootElement.classList.forEach((item) => {
          if (item.startsWith("Theme--color-")) {
            rootElement.classList.replace(item, `Theme--color-${themeSettings.colorTheme}`);
          } else if (item.startsWith("Theme--theme-")) {
            rootElement.classList.replace(item, `Theme--theme-${themeSettings.theme}`);
          }
        });
      }}
    >
      <menu className="Grid Util--gap-3" style={{ "--Grid-count": 1 } as never}>
        <div className="Menu-block">
          <div>Theme</div>
          <div className="Menu-list">
            <label className="Menu-button">
              <input type="radio" name="theme" value="calm" className="Util-hidden" />
              <span>calm</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="theme" value="focus" className="Util-hidden" />
              <span>focus</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="theme" value="fashion" className="Util-hidden" />
              <span>fashion</span>
            </label>
          </div>
        </div>

        <div className="Menu-block">
          <div>Color scheme</div>
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
          <div>Color Theme</div>
          <div className="Menu-list">
            <label className="Menu-button">
              <input type="radio" name="colorTheme" value="blue" className="Util-hidden" />
              <div
                className="ColorSelect-color"
                style={
                  {
                    "--primary": "light-dark(oklch(37% 0.144 260deg), oklch(83% 0.085 278deg))",
                  } as never
                }
              ></div>
              <span>Blue</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="colorTheme" value="green" className="Util-hidden" />
              <div
                className="ColorSelect-color Theme--color-green"
                style={
                  {
                    "--primary": "light-dark(oklch(47% 0.122 145deg), oklch(80% 0.122 145deg))",
                  } as never
                }
              ></div>
              <span>Green</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="colorTheme" value="pink" className="Util-hidden" />
              <div
                className="ColorSelect-color Theme--color-pink"
                style={
                  {
                    "--primary": "light-dark(oklch(50% 0.25 320deg), oklch(85% 0.25 320deg))",
                  } as never
                }
              ></div>
              <span>Pink</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="colorTheme" value="lime" className="Util-hidden" />
              <div
                className="ColorSelect-color Theme--color-lime"
                style={
                  {
                    "--primary": "light-dark(oklch(47% 0.132 132deg), oklch(81% 0.166 130deg))",
                  } as never
                }
              ></div>
              <span>Lime</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="colorTheme" value="red" className="Util-hidden" />
              <div
                className="ColorSelect-color Theme--color-red"
                style={
                  {
                    "--primary": "light-dark(oklch(50% 0.196 28deg), oklch(83% 0.09 28deg))",
                  } as never
                }
              ></div>
              <span>Red</span>
            </label>
            <label className="Menu-button">
              <input type="radio" name="colorTheme" value="yellow" className="Util-hidden" />
              <div
                className="ColorSelect-color Theme--color-yellow"
                style={
                  {
                    "--primary": "light-dark(oklch(48% 0.101 102deg), oklch(82% 0.172 102deg))",
                  } as never
                }
              ></div>
              <span>Yellow</span>
            </label>
          </div>
        </div>

        {/*<div className="Menu-block">
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
        </div>*/}

        <div className="Menu-block">
          <div>Text scale</div>
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
          <div>Text size</div>
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
            <div>Text density</div>
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
          <div>Text direction</div>
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
            <div>Motion reduction</div>
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
  );
};
