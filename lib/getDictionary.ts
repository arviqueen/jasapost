import type { Dictionary } from "@/messages/id";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  id: () => import("@/messages/id").then((m) => m.default),
  en: () => import("@/messages/en").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries["id"];
  return loader();
}

export type Locale = "id" | "en";
export const locales: Locale[] = ["id", "en"];
export const defaultLocale: Locale = "id";
