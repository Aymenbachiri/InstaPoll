import { useTranslation } from "@Lib/providers/LanguagesProvider";
import PollsScreen from "@Screens/PollsScreen";
import { Stack } from "expo-router";

export default function PollsHome() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          title: t("pollsHomeScreenTitle"),
        }}
      />
      <PollsScreen />
    </>
  );
}
