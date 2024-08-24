import { responsiveHeight } from "@Lib/helpers/responsiveHeight";
import { responsiveWidth } from "@Lib/helpers/responsiveWidth";
import { MyImageProps } from "@Lib/types/reusableComponentsTypes";
import { Image, StyleSheet } from "react-native";

export default function MyImage({
  source,
  wp,
  hp,
  style,
  ...props
}: MyImageProps) {
  const styles = StyleSheet.create({
    responsiveStyle: {
      width: wp ? responsiveWidth(wp) : undefined,
      height: hp ? responsiveHeight(hp) : undefined,
    },
  });

  return (
    <Image source={source} style={[styles.responsiveStyle, style]} {...props} />
  );
}
