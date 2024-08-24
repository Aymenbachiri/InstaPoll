import { MyText, MyView } from "@Components/reusableComponents";
import PollDetailsScreen from "@Screens/PollDetailsScreen";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { polls } from "src/data/PollsData";

export default function PollDetails() {
  const { pollid } = useLocalSearchParams<{ pollid: string }>();
  const poll = polls.find((poll) => Number(pollid) === poll.id);
  const [selected, setSelected] = useState<string | null>(null);

  const vote = () => {
    if (selected) {
      console.warn("Vote", selected);
    } else {
      console.warn("Please select an option.");
    }
  };

  if (!poll) {
    return (
      <MyView className="p-5 bg-gray-100 dark:bg-gray-900">
        <Stack.Screen options={{ title: "Poll Not Found" }} />
        <MyText wp={4} className="font-bold text-gray-900 dark:text-white">
          Poll not found.
        </MyText>
      </MyView>
    );
  }

  return (
    <PollDetailsScreen
      poll={poll}
      selected={selected}
      setSelected={setSelected}
      vote={vote}
    />
  );
}
