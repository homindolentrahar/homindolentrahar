import React from "react";

type MainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export function MainButton({
  title,
  icon,
  iconPosition = "right",
  className,
  ...props
}: MainButtonProps) {
  return (
    <button
      className={`${className} flex ${
        iconPosition === "right" ? "flex-row" : "flex-row-reverse"
      } items-center justify-center gap-3 py-3 px-8 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold rounded-[5px] hover:drop-shadow-lg transition-all ease-in-out duration-300`}
      {...props}
    >
      {title}
      {icon}
    </button>
  );
}
