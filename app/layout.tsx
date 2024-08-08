import '@/src/app/styles/globals.css'
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/src/app/config/site";
import { fontSans } from "@/src/app/config/fonts";
import { Header } from '@/src/widgets/header'
import { Aside } from '@/src/widgets/aside'
import { Container } from '@/src/shared/ui'




export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Aside/>
          <Header/>
          <main className='z-0 ml-[250px]'>
            <div className='flex flex-col gap-10 my-10 mx-auto w-11/12'>
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
