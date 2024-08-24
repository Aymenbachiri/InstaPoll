import { MyButtonProps } from "@Lib/types/reusableComponentsTypes";
import { Button } from "react-native";

export default function MyButton({
  onPress,
  title,

  ...props
}: MyButtonProps) {
  return <Button title={title} onPress={onPress} {...props} />;
}
