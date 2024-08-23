import MyView from "../components/reusableComponents/MyView";
import MyText from "../components/reusableComponents/MyText";
import MySafeAreaView from "../components/reusableComponents/MySafeAreaView";
import MyTouchableOpacity from "../components/reusableComponents/MyTouchableOpacity";
import Animated from "react-native-reanimated";
import MyImage from "../components/reusableComponents/MyImage";
import { useHomeScreenAnimation } from "../lib/hooks/useHomeScreenAnimation";
import MyLink from "../components/reusableComponents/MyLink";
import { useTranslation } from "../lib/providers/LanguagesProvider";

export default function HomeScreen() {
  const { animatedStyle } = useHomeScreenAnimation();
  const { t } = useTranslation();

  return (
    <MySafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <MyView className="flex-1 justify-center items-center px-6">
        <Animated.View style={animatedStyle} className="items-center">
          <MyImage
            source={{
              uri: "https://img.freepik.com/free-photo/woman-placing-ballot-box-close-up_23-2148265592.jpg?t=st=1724430259~exp=1724433859~hmac=7f66c621dad9e4b603ddf2499196eadca74dd8d4f2eede454b6c5f67b77c5800&w=996",
            }}
            wp={90}
            hp={30}
            className="mb-6 rounded-2xl"
          />
          <MyText
            wp={7}
            className="font-bold text-gray-800 dark:text-white text-center"
          >
            {t("welcomeMessage")}
          </MyText>
          <MyText
            wp={4}
            className="text-gray-600 dark:text-gray-300 mt-4 text-center"
          >
            {t("welcomeDescription")}
          </MyText>
        </Animated.View>
      </MyView>
      <MyView className="px-6 mb-10">
        <Animated.View style={animatedStyle}>
          <MyTouchableOpacity className="bg-blue-500 rounded-full py-3 shadow-lg">
            <MyLink
              href="/polls"
              className="text-center text-white text-lg font-semibold"
            >
              {t("getStarted")}
            </MyLink>
          </MyTouchableOpacity>
        </Animated.View>
      </MyView>
      <Animated.View style={animatedStyle} className="px-6 pb-10">
        <MyText
          wp={5}
          className="font-semibold text-gray-800 dark:text-white mb-4"
        >
          {t("mainFeatures")}
        </MyText>
        <MyText wp={3.5} className="text-gray-600 dark:text-gray-300 mb-1">
          - {t("feature1")}
        </MyText>
        <MyText wp={3.5} className="text-gray-600 dark:text-gray-300 mb-1">
          - {t("feature2")}
        </MyText>
        <MyText wp={3.5} className="text-gray-600 dark:text-gray-300 mb-1">
          - {t("feature3")}
        </MyText>
      </Animated.View>
    </MySafeAreaView>
  );
}
