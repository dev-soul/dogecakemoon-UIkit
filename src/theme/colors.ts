import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#653101", // color of the icons on navbar, scrollbar on right side, fill color of harvest and approve contracts
  primaryBright: "#599e17",
  primaryDark: "#599e17",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff", //Background, the main block in the centre
  backgroundDisabled: "#E9EAEB", //Harvest button when nothing to harvest
  contrast: "#191326", //might be the stake only slider when active? But in dark mode its called invertedContrast
  invertedContrast: "#000000",
  input: "#eeeaf4", //'stake only' slider
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5", //color of highlighted box on navbar
  text: "#653101", //color of words on home menu cards eg farms & staking
  textDisabled: "#BDC2C4", //color of boxes non highlighted on menu, might actually be the unhighlighted harvest word
  textSubtle: "#653101", //color of text on menu dropdown items
  borderColor: "#E9EAEB", //The small line on the left side, not important
  card: "#ffffff", //Top and side blocks i think
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#653101", //color of words on top of LP staking page (Stake tokens to earn ...)
  background: "#ffffff",
  backgroundDisabled: "#3c3742",
  contrast: "#653101",
  invertedContrast: "#0a0e17", //might be the stake only slider when activated
  input: "#653101", // 'stake only' slider
  inputBorder: "#cccccc",
  primaryDark: "#599e17",
  tertiary: "#ffffff", //color of highlighted box on menu
  text: "#653101", //color of words on home menu cards eg farms & staking
  textDisabled: "#666171", //color of boxes non highlighted on menu
  textSubtle: "#653101", //color of text on menu dropdown items
  borderColor: "#524B63", //The small line on the left side, not important
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
