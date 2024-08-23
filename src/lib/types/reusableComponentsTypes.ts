import type { LinkProps } from "expo-router";
import type {
  ButtonProps,
  ImageProps,
  ImageSourcePropType,
  PressableProps,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

export interface MyTextProps extends TextProps {
  children: React.ReactNode;
  wp?: string | number;
  hp?: string | number;
}

export interface MyViewProps extends ViewProps {
  children: React.ReactNode;
  wp?: string | number;
  hp?: string | number;
}

export interface MyTouchableOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
  wp?: string | number;
  hp?: string | number;
}

export interface MyLinkProps extends LinkProps<string | object> {}

export interface MyPressableProps extends PressableProps {
  onPress: () => void;
}

export interface MyButtonProps extends ButtonProps {
  onPress: () => void;
  title: string;
}

export interface MyTextInputProps extends TextInputProps {
  value: string;
  onChangeText: any;
  placeholder: string;
}

export interface MySafeAreaViewProps extends SafeAreaViewProps {
  children: React.ReactNode;
}

export interface MyImageProps extends ImageProps {
  wp?: string | number;
  hp?: string | number;
}
