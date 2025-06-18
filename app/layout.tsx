import type React from 'react';
import '@/app/globals.css';
import { Syne } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Plus_Jakarta_Sans } from 'next/font/google';
import CustomCursor from '@/components/FlareCursor'

const syne = Syne({ subsets: ['latin'], weight: '400' });
export const jak = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Lakshmika - Graphic & Logo Designer',
  description: '',
  icons:'/favicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={syne.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <CustomCursor />
      </body>
    </html>
  );
}
