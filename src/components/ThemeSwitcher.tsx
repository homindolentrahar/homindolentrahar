import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

export default function ThemeSwitcher(
  props: React.HTMLAttributes<HTMLElement>
) {
  const [theme, setTheme] = React.useState("light");

  // Populate initial theme saved from localStorage
  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button {...props} onClick={toggleTheme} variant="outline" size="icon">
      {theme === "dark" ? (
        <Sun className="text-gray-950 dark:text-white" />
      ) : (
        <Moon className="text-gray-950 dark:text-white" />
      )}
    </Button>
  );
}
