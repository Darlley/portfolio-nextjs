"use client";

import { MessageSquareShare } from "lucide-react";
import { Inter } from "next/font/google";
import { toast, Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";
import "@/styles/nprogress.css";
import { Button } from "@nextui-org/button";
import { Card, Input, Textarea } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import NProgress from "nprogress";
import React, { FormEvent, useState } from "react";
import { Providers } from "./providers";

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
          <Chat />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

const CREDENTIAL_WEBHOOK_USER = process.env.NEXT_PUBLIC_WEBHOOK_USER;
const CREDENTIAL_WEBHOOK_PASSWORD = process.env.NEXT_PUBLIC_WEBHOOK_PASSWORD;
const URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      whatsapp: formData.get("whatsapp") as string,
      message: formData.get("message") as string,
    };
    const basicAuth = `Basic ${btoa(
      `${CREDENTIAL_WEBHOOK_USER}:${CREDENTIAL_WEBHOOK_PASSWORD}`
    )}`;

    fetch(URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ajuste para application/json se necessário
        Authorization: basicAuth, // Adiciona o cabeçalho de autenticação
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsOpen(false);
        toast.success("Mensagem enviada!");
      })
      .catch((error) => {
        console.error("Erro:", error);
        toast.error("Ops, aconteceu algum erro...");
      });
  }

  return (
    <div className="fixed bottom-4 right-4 min-w-[350px] max-w-[400px] z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <Card className="rounded-lg shadow-lg w-full">
          <form className="p-4" onSubmit={onSubmit}>
            <h3 className="text-lg font-medium mb-4">Mande uma mensagem</h3>
            <div className="flex flex-col gap-4">
              <div>
                <Input
                  id="name"
                  name="name"
                  label="Seu nome"
                  labelPlacement="outside"
                  isRequired
                  required
                  classNames={{
                    input:
                      "focus:ring-0 focus:outline-none ring-0 outline-none border-none",
                  }}
                />
              </div>
              <div>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  label="Seu WhatsApp"
                  labelPlacement="outside"
                  isRequired
                  classNames={{
                    input:
                      "focus:ring-0 focus:outline-none ring-0 outline-none border-none",
                  }}
                  required
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  label="Sua Mensagem"
                  labelPlacement="outside"
                  isRequired
                  classNames={{
                    input:
                      "focus:ring-0 focus:outline-none ring-0 outline-none border-none",
                  }}
                />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Enviar
                </Button>
              </div>
            </div>
          </form>
        </Card>
      )}

      <Button
        className="rounded-full p-4 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        variant="flat"
        isIconOnly
        size="lg"
      >
        <MessageSquareShare className="h-6 w-6" />
      </Button>
    </div>
  );
}
