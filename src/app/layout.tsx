"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";
import "@/styles/nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Providers } from "./providers";
import React from "react";

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
