import { Stack } from "expo-router";
import { LanguagesProvider } from "../lib/providers/LanguagesProvider";
import HeaderRight from "../components/HeaderRight";

export default function RootLayout() {
  return (
    <LanguagesProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "InstaPoll",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="polls/index"
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
      </Stack>
    </LanguagesProvider>
  );
}
