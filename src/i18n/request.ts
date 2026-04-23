import {routing} from './routing';

export default async function getRequestConfig({
  requestLocale
}: {
  requestLocale: Promise<string | undefined>;
}) {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "vi" | "fr" | "de" | "ja")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}
