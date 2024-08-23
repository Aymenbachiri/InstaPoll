import MyView from "@/src/components/reusableComponents/MyView";
import { useLanguage } from "../providers/LanguagesProvider";
import MyTouchableOpacity from "@/src/components/reusableComponents/MyTouchableOpacity";
import MyText from "@/src/components/reusableComponents/MyText";

export default function LocaleSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  return (
    <MyView className="flex-row justify-center space-x-2 my-4">
      {languages.map((lang) => (
        <MyTouchableOpacity
          key={lang.code}
          onPress={() => setLocale(lang.code)}
          className={`px-3 py-2 rounded-full ${
            locale === lang.code ? "bg-blue-500" : "bg-gray-200"
          }`}
        >
          <MyText
            className={`${
              locale === lang.code ? "text-white" : "text-gray-800"
            }`}
          >
            {lang.name}
          </MyText>
        </MyTouchableOpacity>
      ))}
    </MyView>
  );
}
