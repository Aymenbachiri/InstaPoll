import { Feather, FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import MyTouchableOpacity from "../components/reusableComponents/MyTouchableOpacity";

export default function RootLayout() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "home",
          headerRight: () => (
            <MyTouchableOpacity onPress={toggleColorScheme}>
              {colorScheme === "dark" ? (
                <Feather name="sun" size={24} color="black" />
              ) : (
                <FontAwesome name={"moon-o"} size={24} color="black" />
              )}
            </MyTouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
