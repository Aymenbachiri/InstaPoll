import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import MyText from "../components/reusableComponents/MyText";
import MyView from "../components/reusableComponents/MyView";
import { useColorScheme } from "nativewind";

export default function PollScreen() {
  const { colorScheme } = useColorScheme();
  const polls = [
    { id: 1, question: "What is your favorite color?" },
    { id: 2, question: "What is your preferred mode of transportation?" },
    { id: 3, question: "What is your favorite food?" },
    { id: 4, question: "What is your favorite hobby?" },
    { id: 5, question: "What is your favorite movie genre?" },
    { id: 6, question: "What is your favorite season?" },
    { id: 7, question: "What is your favorite music genre?" },
    { id: 8, question: "What is your favorite sport?" },
  ];

  return (
    <MyView className="flex-1 bg-white dark:bg-gray-900 p-2">
      <FlatList
        data={polls}
        contentContainerStyle={{ paddingBottom: 20, padding: 4, gap: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log(`Selected poll ID: ${item.id}`)}
            className="p-2 flex-row items-center mb-2 rounded-lg border border-gray-300 dark:border-gray-700 "
          >
            <FontAwesome5
              name="poll"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <MyText wp={4} className="dark:text-white ml-3">
              {item.question}
            </MyText>
          </TouchableOpacity>
        )}
      />
    </MyView>
  );
}
