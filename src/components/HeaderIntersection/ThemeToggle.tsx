import type { ReactElement } from "react";

import { Icon } from "@/components/Icon";

const toggleTheme = (): void => {
  const root = document.documentElement;
  const theme = root.dataset.theme === "light" ? "dark" : "light";

  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");

  try {
    localStorage.setItem("theme", theme);
  } catch {}
};

export const ThemeToggle = (): ReactElement => (
  <button
    type="button"
    onClick={toggleTheme}
    className="text-muted-foreground hover:text-primary flex cursor-pointer items-center transition-colors duration-300"
    title="Toggle theme"
    aria-label="Toggle theme"
  >
    <Icon name="sun" className="light:hidden h-5 w-5" />
    <Icon name="moon" className="light:block hidden h-5 w-5" />
  </button>
);
