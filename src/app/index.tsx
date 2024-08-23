import MyView from "../components/reusableComponents/MyView";
import MyText from "../components/reusableComponents/MyText";
import MySafeAreaView from "../components/reusableComponents/MySafeAreaView";
import MyTouchableOpacity from "../components/reusableComponents/MyTouchableOpacity";
import Animated from "react-native-reanimated";
import MyImage from "../components/reusableComponents/MyImage";
import { useHomeScreenAnimation } from "../lib/hooks/useHomeScreenAnimation";
import { useLanguage } from "../lib/providers/LanguagesProvider";
import LocaleSwitcher from "../lib/helpers/LocaleSwitcher";

export default function Home() {
  const { animatedStyle } = useHomeScreenAnimation();
  const { t } = useLanguage();

  return (
    <MySafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <LocaleSwitcher />
      <MyText>{t("test")}</MyText>
      {/* Welcome Message with Image */}
      <MyView className="flex-1 justify-center items-center px-6">
        <Animated.View style={animatedStyle} className="items-center">
          <MyImage
            source={{
              uri: "https://images.unsplash.com/photo-1602906530215-1bf5f4925279?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            wp={80}
            hp={30}
            className="mb-6 rounded-full"
          />
          <MyText className="text-3xl font-bold text-gray-800 dark:text-white text-center">
            {t("welcomeMessage")}
          </MyText>
          <MyText className="text-lg text-gray-600 dark:text-gray-300 mt-4 text-center">
            {t("welcomeDescription")}
          </MyText>
        </Animated.View>
      </MyView>

      {/* Get Started Button with Animation */}
      <MyView className="px-6 mb-10">
        <Animated.View style={animatedStyle}>
          <MyTouchableOpacity className="bg-blue-500 rounded-full py-3 shadow-lg">
            <MyText className="text-center text-white text-lg font-semibold">
              {t("getStarted")}
            </MyText>
          </MyTouchableOpacity>
        </Animated.View>
      </MyView>

      {/* Main Features Section with Fade-In Animation */}
      <Animated.View style={animatedStyle} className="px-6 pb-10">
        <MyText className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {t("mainFeatures")}
        </MyText>
        <MyText className="text-gray-600 dark:text-gray-300 mb-1">
          - {t("feature1")}
        </MyText>
        <MyText className="text-gray-600 dark:text-gray-300 mb-1">
          - {t("feature2")}
        </MyText>
        <MyText className="text-gray-600 dark:text-gray-300 mb-1">
          - {t("feature3")}
        </MyText>
      </Animated.View>
    </MySafeAreaView>
  );
}
