import { responsiveHeight } from "@Lib/helpers/responsiveHeight";
import { responsiveWidth } from "@Lib/helpers/responsiveWidth";
import { MyTextProps } from "@Lib/types/reusableComponentsTypes";
import { Text, StyleSheet } from "react-native";

export default function MyText({
  children,
  wp,
  hp,
  style,
  ...props
}: MyTextProps) {
  const defaultFontSize = responsiveWidth(4);
  const styles = StyleSheet.create({
    responsiveStyle: {
      fontSize: wp ? responsiveWidth(wp) : defaultFontSize,
      height: hp ? responsiveHeight(hp) : undefined,
    },
  });

  return (
    <Text style={[styles.responsiveStyle, style]} {...props}>
      {children}
    </Text>
  );
}
