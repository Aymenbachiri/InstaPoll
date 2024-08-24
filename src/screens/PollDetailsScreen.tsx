import { MyPressable, MyText, MyView } from "@Components/reusableComponents";
import { Feather } from "@expo/vector-icons";
import type { PollDetailsScreenProps } from "@Lib/types/types";
import { Stack } from "expo-router";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function PollDetailsScreen({
  poll,
  selected,
  setSelected,
  vote,
}: PollDetailsScreenProps) {
  return (
    <MyView className="p-5 h-full bg-gray-100 dark:bg-gray-900">
      <Stack.Screen options={{ title: "Poll Voting" }} />
      <Animated.View entering={FadeIn} exiting={FadeOut}>
        <MyText
          wp={4}
          className="font-bold mb-5 text-center text-gray-900 dark:text-white"
        >
          {poll?.question}
        </MyText>

        <MyView className="mt-4 mb-10 gap-4">
          {poll?.options.map((option) => (
            <MyPressable
              onPress={() => setSelected(option)}
              key={option}
              className={`p-4 rounded-lg flex-row items-center gap-3 ${
                option === selected
                  ? "bg-green-500 border-green-700"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              }`}
            >
              <Feather
                name={option === selected ? "check-circle" : "circle"}
                size={wp(5)}
                color={option === selected ? "white" : "gray"}
              />
              <MyText className="text-gray-900 dark:text-white">
                {option}
              </MyText>
            </MyPressable>
          ))}
        </MyView>

        <MyPressable
          onPress={vote}
          className="mt-8 bg-blue-500 dark:bg-green-600 p-3 rounded-lg items-center"
        >
          <MyText className="text-white" wp={5}>
            Vote
          </MyText>
        </MyPressable>
      </Animated.View>
    </MyView>
  );
}
