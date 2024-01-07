import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";

import { Editor } from "novel";

const metadata = {
  title: "Darlley - Blog",
  description: "Um blog de pensamentos sobre tecnologia e filosofia.",
  image: "https://www.darlley.dev/lotr-1440x522.png",
};

export default function EditArticlePage() {
  const { data: session } = useSession()

  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <div className="flex flex-col items-center gap-2">
          <h1>Artigo</h1>
        </div>
      </HeaderPage>
      <main className="relative flex h-[50svh] p-4 flex-1 flex-col md:flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          menu
        </div>
        <div>
        <Editor />
        </div>
      </main>
    </>
  )
}

