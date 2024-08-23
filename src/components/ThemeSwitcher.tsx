import { useColorScheme } from "nativewind";
import MyTouchableOpacity from "../components/reusableComponents/MyTouchableOpacity";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <MyTouchableOpacity onPress={toggleColorScheme} className="mr-4">
      {colorScheme === "dark" ? (
        <Feather name="sun" size={24} color="black" />
      ) : (
        <FontAwesome name={"moon-o"} size={24} color="black" />
      )}
    </MyTouchableOpacity>
  );
}
