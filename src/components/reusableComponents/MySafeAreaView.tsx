import { MySafeAreaViewProps } from "@Lib/types/reusableComponentsTypes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MySafeAreaView({
  children,
  ...props
}: MySafeAreaViewProps) {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
}
