import { Feather, FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import MyTouchableOpacity from "../components/reusableComponents/MyTouchableOpacity";
import MyView from "../components/reusableComponents/MyView";
import MyText from "../components/reusableComponents/MyText";
import { LanguagesProvider } from "../lib/providers/LanguagesProvider";

export default function RootLayout() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <LanguagesProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "home",
            headerRight: () => (
              <MyView className="flex flex-row items-center gap-4">
                <MyTouchableOpacity onPress={toggleColorScheme}>
                  {colorScheme === "dark" ? (
                    <Feather name="sun" size={24} color="black" />
                  ) : (
                    <FontAwesome name={"moon-o"} size={24} color="black" />
                  )}
                </MyTouchableOpacity>
                <MyText>en</MyText>
              </MyView>
            ),
          }}
        />
      </Stack>
    </LanguagesProvider>
  );
}
