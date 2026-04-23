import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {ThemeProvider} from '@/components/theme-provider';
import {Navbar} from '@/components/navbar';
import {Inter, Lora} from 'next/font/google';
import '../globals.css';

export const runtime = 'edge';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Hero'});

  return {
    title: `Nexus Musk | ${t('role')}`,
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as "en" | "vi" | "fr" | "de" | "ja")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased text-foreground bg-background`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
