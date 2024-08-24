import LocaleSwitcher from "@Lib/helpers/LocaleSwitcher";
import MyView from "./reusableComponents/MyView";
import ThemeSwitcher from "./ThemeSwitcher";

export default function HeaderRight() {
  return (
    <MyView className="flex flex-row items-center">
      <ThemeSwitcher />
      <LocaleSwitcher />
    </MyView>
  );
}
