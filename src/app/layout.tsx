import type {Metadata, Viewport} from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import React, {Suspense} from 'react';
import {NextFont} from 'next/dist/compiled/@next/font';
import {YandexMetrika} from '@/components/YandexMetrika';

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Уютный дом - механизированная штукатурка и стяжка во Владивостоке и Приморском крае",
  description: "Компания Уютный дом это механизированная штукатурка стен и полусухая стяжка пола по самой выгодной цене от 299 рублей в городе Владивосток и по Приморскому краю",
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
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  );
}
