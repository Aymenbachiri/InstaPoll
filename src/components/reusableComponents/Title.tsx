import { responsiveWidth } from "@Lib/helpers/responsiveWidth";
import MyText from "./MyText";
import type { MyTextProps } from "@Lib/types/reusableComponentsTypes";

export default function Title({ children, style, ...props }: MyTextProps) {
  const titleFontSize = responsiveWidth(6);

  return (
    <MyText wp={titleFontSize} style={style} {...props}>
      {children}
    </MyText>
  );
}
