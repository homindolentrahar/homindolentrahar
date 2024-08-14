import { SVGAttributes } from "react";

export type IconProps = SVGAttributes<SVGElement>;

function SvgIconWrapper({
  props,
  children,
}: {
  props?: IconProps;
  children: React.ReactNode;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={"none"}
      viewBox="0 0 24 24"
      className={props?.className ?? "size-6 fill-zinc-500 stroke-zinc-500"}
      {...props}
    >
      {children}
    </svg>
  );
}

export function Logo({ ...props }: IconProps) {
  return (
    <svg width="62" height="70" viewBox="0 0 62 70" fill="none" {...props}>
      <path
        d="M16 61.4L19 32M22 8L19 32M19 32L46 29L43 56"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeDasharray="40 4"
      />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </SvgIconWrapper>
  );
}

export function Close(props: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </SvgIconWrapper>
  );
}

export function CaretDown(props?: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </SvgIconWrapper>
  );
}

export function Language(props?: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
      />
    </SvgIconWrapper>
  );
}

export function Sun(props?: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </SvgIconWrapper>
  );
}

export function Moon(props?: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
        clipRule="evenodd"
      />
    </SvgIconWrapper>
  );
}

export function Hamburger(props?: IconProps) {
  return (
    <SvgIconWrapper props={props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </SvgIconWrapper>
  );
}
