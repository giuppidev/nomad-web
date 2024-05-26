"use client";

import { Locale } from "@/i18n.config";
// import { getDictionary } from "@/lib/dictionary";
import WorldMapScene from "@/components/worldmap/worldmap-scene";
import { useLocaleContext } from "@/context/LocaleContext";

// Nel server component il parametro lang non serve passarlo come props
// in questo serve a titolo dimostrativo
export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const { page } = await getDictionary(lang);

  const {
    dictionary: { page },
  } = useLocaleContext();

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between ">
      <WorldMapScene />
    </main>
  );
}
