import { iconName } from "./icomoonNames";

export function getRandomIcon() {
  const randomId = Math.floor(Math.random() * 300);
  return iconName[randomId];
}
