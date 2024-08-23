import { useState } from "react";
import { Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyView from "@/src/components/reusableComponents/MyView";
import MyTouchableOpacity from "@/src/components/reusableComponents/MyTouchableOpacity";
import MyText from "@/src/components/reusableComponents/MyText";
import { useTranslation } from "../providers/LanguagesProvider";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <MyView>
      <MyTouchableOpacity
        onPress={() => setIsOpen(true)}
        className="flex-row items-center"
      >
        <MyText className="mr-1">{currentLanguage.name}</MyText>
        <Ionicons name="chevron-down" size={16} color="black" />
      </MyTouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <MyTouchableOpacity
          className="flex-1 justify-center items-center bg-black bg-opacity-50"
          onPress={() => setIsOpen(false)}
        >
          <MyView className="bg-white rounded-lg p-4 w-48">
            {languages.map((lang) => (
              <MyTouchableOpacity
                key={lang.code}
                onPress={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={`py-2 px-4 rounded ${
                  locale === lang.code ? "bg-blue-500" : "bg-white"
                }`}
              >
                <MyText
                  className={`${
                    locale === lang.code ? "text-white" : "text-black"
                  }`}
                >
                  {lang.name}
                </MyText>
              </MyTouchableOpacity>
            ))}
          </MyView>
        </MyTouchableOpacity>
      </Modal>
    </MyView>
  );
}
