import { MyPressableProps } from "@Lib/types/reusableComponentsTypes";
import { Pressable } from "react-native";

export default function MyPressable({
  children,
  onPress,
  ...props
}: MyPressableProps) {
  return (
    <Pressable onPress={onPress} {...props}>
      {children}
    </Pressable>
  );
}
