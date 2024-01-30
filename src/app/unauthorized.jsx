import HeaderPage from "@/components/molecules/HeaderPage";

export default function Unauthorized() {
  return (
    <>
      <HeaderPage>
        <h1>Sem autorização... faça login 😉</h1>
      </HeaderPage>
      <main className="overflow-hidden h-[calc(100vh-240.9px)] flex p-4 flex-1 justify-center py-12 sm:px-6 lg:px-8 relative">
        <a href="/login">Ir para a página de login</a>
      </main>
    </>
  )
}
