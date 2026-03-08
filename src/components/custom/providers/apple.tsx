import universal from "@/assets/providers/apple/universal.svg?raw";
import type { SVGProps } from "react";
import { extract_svg_data } from "@/utils/extract-svg-data";

type AppleProps = SVGProps<SVGSVGElement>;

export const Apple = ({ style, ...props }: AppleProps) => <>
    <svg {...extract_svg_data({ svg: universal })} {...props} style={style} />
</>
