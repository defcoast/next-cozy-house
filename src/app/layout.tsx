import type {Metadata, Viewport} from 'next';
import { Inter, Russo_One } from "next/font/google";
import "./globals.css";
import React, {Suspense} from 'react';
import {Metrika} from '@/components/Metrika';
import classNames from 'classnames';

const inter = Inter({
  subsets: ['cyrillic'],
  variable: '--font-inter',
});

const russoOne = Russo_One({
  weight: '400',
  subsets: ['cyrillic'],
  variable: '--font-russo',
});

export const metadata: Metadata = {
  title: "Заказать механизированную (машинную) стяжку пола во Владивостоке по выгодным ценам",
  description: "У нас Вы можете заказать механизированную (машинную) стяжку пола во Владивостоке по выгодным ценам. Цена за м2, плюсы и минусы по сравнению с ручной штукатуркой. Гарантия качества",
  authors: {
    name: 'Rozhkov Alexander <rozhkov2222@icloud.com>',
  },
  keywords: [
    'Уютный дом',
    'механизированная штукатурка',
    'полусухая стяжка',
    'ремонт Владивосток',
    'смесь',
    'оштукатуривание',
  ],
  appleWebApp: {
    title: 'Уютный дом',
  },
  verification: {
    google: 'NhgbeLlP2hTTlrXSEmeIOK7j3LlWvytkwkpbs8vQmjg',
    yandex: 'd1408a2b8a5e1c7c',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <body className={classNames(inter.variable, russoOne.variable, inter.className)}>
    {children}
        {children}

        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
