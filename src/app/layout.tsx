"use client";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

import clsx from "clsx";

import "@/styles/globals.css";
import "@/styles/nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import NProgress from "nprogress";
import React from "react";
import { Providers } from "./providers";
import { Metadata } from "next";
import classNames from "classnames";

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const metadata: Metadata = {
  title: "Darlley Brito - Portfólio",
  description:
    "Desenvolvedor Web Full Stack and UI Designer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={clsx(inter.className, 'h-svh w-full')}>
        <Providers>
          {children}
          <Analytics />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
