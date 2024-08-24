import { MyLinkProps } from "@Lib/types/reusableComponentsTypes";
import { type Href, Link } from "expo-router";

export default function MyLink({ children, href, ...props }: MyLinkProps) {
  return (
    <Link href={href as Href} {...props}>
      {children}
    </Link>
  );
}
