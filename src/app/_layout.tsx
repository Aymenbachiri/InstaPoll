import HeaderRight from "@Components/HeaderRight";
import { LanguagesProvider } from "@Lib/providers/LanguagesProvider";
import { Stack } from "expo-router";

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
