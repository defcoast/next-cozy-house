import type {Metadata, Viewport} from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import React, {Suspense} from 'react';
import {NextFont} from 'next/dist/compiled/@next/font';
import {Metrika} from '@/components/Metrika';

const inter: NextFont = Inter({ subsets: ["latin"] });

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
  verification: {
    google: 'NhgbeLlP2hTTlrXSEmeIOK7j3LlWvytkwkpbs8vQmjg',
    yandex: 'd1408a2b8a5e1c7c',
  }
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
      <body className={inter.className}>
        {children}

        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
