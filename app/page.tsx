import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/getDictionary";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
