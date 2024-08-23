import { useTranslation } from "@/src/lib/providers/LanguagesProvider";
import PollScreen from "@/src/screens/PollScreen";
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
      <PollScreen />
    </>
  );
}
