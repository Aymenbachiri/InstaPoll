import { FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { MyLink, MyText, MyView } from "@Components/reusableComponents";
import { polls } from "src/data/PollsData";

export default function PollsScreen() {
  const { colorScheme } = useColorScheme();

  return (
    <MyView className="flex-1 bg-white dark:bg-gray-900 p-2">
      <FlatList
        data={polls}
        contentContainerStyle={{
          paddingBottom: 20,
          padding: 4,
          gap: 6,
          marginVertical: 5,
        }}
        renderItem={({ item }) => (
          <MyLink
            href={`/polls/${item.id}` as any}
            className="p-2 flex flex-row items-center mb-2 rounded-lg border border-gray-300 dark:border-gray-700"
          >
            <FontAwesome5
              name="poll"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <MyText wp={4} className="dark:text-white flex-1 ml-3">
              {item.question}
            </MyText>
          </MyLink>
        )}
      />
    </MyView>
  );
}
