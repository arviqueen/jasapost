import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/getDictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "jasapost.com",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://jasapost.com/${locale}`,
      languages: {
        id: "https://jasapost.com/id",
        en: "https://jasapost.com/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const lang = locale === "id" ? "id" : "en";

  return (
    <html lang={lang}>
      <body className="antialiased">
        <Navbar dict={dict} locale={locale} />
        <main>{children}</main>
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
