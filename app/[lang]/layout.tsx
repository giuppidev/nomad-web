import Header from "@/components/Header";

import { Locale, i18n } from "@/i18n.config";
import { LocaleProvider } from "@/context/LocaleContext";
import { getDictionary } from "@/lib/dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <LocaleProvider lang={params.lang} dictionary={dictionary}>
      <Header />
      <main lang={params.lang}>{children}</main>
    </LocaleProvider>
  );
};

export default LocaleLayout;
