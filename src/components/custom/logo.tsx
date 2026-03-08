import { clsx } from "clsx";

export type LogoProps = {
    className?: string;
}

export const Logo = (
    { className }:
    LogoProps
) => <>
    <span className={clsx("text-2xl", className)}>📓</span>
</>