import universal from "@/assets/providers/google/universal.svg?raw";
import type { SVGProps } from "react";
import { extract_svg_data } from "@/utils/extract-svg-data";

type GoogleProps = SVGProps<SVGSVGElement>;

export const Google = ({ style, ...props }: GoogleProps) => <>
    <svg {...extract_svg_data({ svg: universal })} {...props} style={style} />
</>
