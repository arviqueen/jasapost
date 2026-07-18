import { getDictionary } from "@/lib/getDictionary";
import Hero from "@/components/Hero";
import Clipper from "@/components/Clipper";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Clipper dict={dict} />
      <Services dict={dict} />
      <Pricing dict={dict} />
      <Process dict={dict} />
      <Team dict={dict} />
      <FAQ dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
