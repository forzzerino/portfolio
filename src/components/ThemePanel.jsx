import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

const primaryColors = [
  { hex: "#ffffff", rgb: "255, 255, 255", name: "white" },
  { hex: "#10b981", rgb: "16, 185, 129", name: "emerald" },
  { hex: "#22c55e", rgb: "34, 197, 94", name: "green" },
  { hex: "#84cc16", rgb: "132, 204, 22", name: "lime" },
  { hex: "#f59e0b", rgb: "245, 158, 11", name: "amber" },
  { hex: "#f97316", rgb: "249, 115, 22", name: "orange" },
  { hex: "#14b8a6", rgb: "20, 184, 166", name: "teal" },
  { hex: "#06b6d4", rgb: "6, 182, 212", name: "cyan" },
  { hex: "#6366f1", rgb: "99, 102, 241", name: "indigo" },
  { hex: "#8b5cf6", rgb: "139, 92, 246", name: "violet" },
  { hex: "#ec4899", rgb: "236, 72, 153", name: "pink" },
  { hex: "#ef4444", rgb: "239, 68, 68", name: "red" },
];

const surfaceColors = [
  "#000",
  "#0a0f1a",
  "#090b0f",
  "#0f040f",
  "#090c0d",
  "#05050f",
  "#070708",
];
const fonts = ["Geist", "Geist Mono"];
const borderRadiusSteps = [
  { label: "none", value: "0rem" },
  { label: "medium", value: ".75rem" },
  { label: "round", value: "1rem" },
  { label: "full", value: "2rem" },
];

const marginSteps = [
  { label: "none", value: "0rem" },
  { label: "medium", value: ".5rem" },
  { label: "full", value: "1rem" },
];
function ThemePanel() {
  const [selectedColor, setSelectedColor] = useState(primaryColors[0]);
  const [open, setOpen] = useState(false);
  const [surfaceColor, setSurfaceColor] = useState(surfaceColors[0]);
  const [fontFamily, setFontFamily] = useState(fonts[0]);
  const [radiusIndex, setRadiusIndex] = useState(0);
  const [marginIndex, setMarginIndex] = useState(0);
  useEffect(() => {
    const selectedmargin = marginSteps[marginIndex];
    document.documentElement.style.setProperty(
      "--margin",
      selectedmargin.value
    );
  }, [marginIndex]);
  useEffect(() => {
    const selected = borderRadiusSteps[radiusIndex];
    document.documentElement.style.setProperty(
      "--border-radius",
      selected.value
    );
  }, [radiusIndex]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-primary",
      selectedColor.rgb
    );
    document.documentElement.style.setProperty(
      "--color-primary-hex",
      selectedColor.hex
    );
  }, [selectedColor]);
  useEffect(() => {
    document.documentElement.style.setProperty("--color-surface", surfaceColor);
    document.documentElement.style.setProperty("--font-family", fontFamily);
  }, [surfaceColor, fontFamily]);
  return (
    <>
      <button className="icon cursor-pointer" onClick={() => setOpen(!open)}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M12.07 4.25h-.11c-3.79 0-7.09 2.79-7.69 6.54c-.08.5.06 1.02.4 1.41c.33.39.8.61 1.3.61h.06c1.74 0 3.05.43 3.89 1.27c.85.85 1.27 2.18 1.26 3.95c0 .5.22.97.6 1.3c.32.28.73.43 1.14.42c.09 0 .18 0 .27-.02c3.79-.61 6.6-3.96 6.55-7.8c-.06-4.17-3.5-7.62-7.68-7.68Zm.89 14c-.06 0-.14-.01-.2-.06c-.03-.03-.08-.08-.08-.15c.01-2.19-.56-3.88-1.7-5.02c-1.13-1.13-2.8-1.71-4.95-1.71h-.06c-.08 0-.13-.05-.16-.08c-.02-.03-.08-.1-.06-.2c.49-3.02 3.15-5.28 6.21-5.28h.09c3.31.05 6.15 2.88 6.2 6.2c.04 3.1-2.23 5.81-5.28 6.3ZM9.94 9.02c0 .55-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01s.45-1.01 1.01-1.01s1.01.45 1.01 1.01Zm3.02-1.26c0 .55-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01s.45-1.01 1.01-1.01s1.01.45 1.01 1.01Zm1.01 1.26c0-.55.45-1.01 1.01-1.01s1.01.45 1.01 1.01s-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01Zm3.27 3.02c0 .55-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01s.45-1.01 1.01-1.01s1.01.45 1.01 1.01Zm-1.26 3.02c0 .55-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01s.45-1.01 1.01-1.01s1.01.45 1.01 1.01Z" />
        </svg>
      </button>

      {open && (
        <div className="fixed top-16 right-10 lg:right-18 z-50 bg-gray-900 text-white p-4 rounded shadow-lg w-[22rem] transition-all">
          <div className="">
            <h4 className="text-sm font-bold mb-2 text-[var(--color-text-secondary-hex)]">
              Primary Color
            </h4>
            <div className="flex flex-wrap gap-2 ">
              {primaryColors.map((color) => (
                <button
                  key={color.hex}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 transition-all duration-200 ${
                    selectedColor.hex === color.hex
                      ? "border-white scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                ></button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-bold mb-2 text-[var(--color-text-secondary-hex)]">
              Surface Color
            </h4>
            <div className="flex flex-wrap  gap-2">
              {surfaceColors.map((surface) => (
                <button
                  key={surface}
                  className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                    surface === surfaceColor
                      ? "border-white scale:110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: surface }}
                  onClick={() => setSurfaceColor(surface)}
                ></button>
              ))}
            </div>
          </div>{" "}
          <div className="mt-6">
            <h4 className="text-sm font-bold mb-2 text-[var(--color-text-secondary-hex)]">
              Font Family
            </h4>
            <div className="flex flex-wrap gap-2  p-1 bg-gray-950/80 rounded-lg ">
              {fonts.map((font) => (
                <button
                  key={font}
                  className={`transition-all px-2 rounded-md  cursor-pointer ${
                    font === fontFamily
                      ? "bg-gray-600 border-0"
                      : "bg-gray-900 "
                  }`}
                  style={{ fontFamily: font }}
                  onClick={() => setFontFamily(font)}
                >
                  <p>{font}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-bold mb-2 text-[var(--color-text-secondary-hex)]">
              Border Radius
            </h4>
            <div className="flex flex-col flex-wrap gap-2  py-1 px-2 rounded-lg ">
              <input
                type="range"
                min="0"
                max={borderRadiusSteps.length - 1}
                step="1"
                value={radiusIndex}
                onChange={(e) => setRadiusIndex(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)] slider-thumb"
              />

              <div className="flex justify-between text-sm text-gray-400">
                {borderRadiusSteps.map((step, i) => (
                  <span key={i} className="text-center">
                    {step.label}
                  </span>
                ))}
              </div>
            </div>
          </div>{" "}
          <div className="mt-6">
            <h4 className="text-sm font-bold mb-2 text-[var(--color-text-secondary-hex)]">
              Margin
            </h4>
            <div className="flex flex-col flex-wrap gap-2  py-1 px-2 rounded-lg ">
              <input
                type="range"
                min="0"
                max={marginSteps.length - 1}
                step="1"
                value={marginIndex}
                onChange={(e) => setMarginIndex(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)] slider-thumb"
              />

              <div className="flex justify-between text-sm text-gray-400">
                {marginSteps.map((step, i) => (
                  <span key={i} className="text-center">
                    {step.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ThemePanel;
