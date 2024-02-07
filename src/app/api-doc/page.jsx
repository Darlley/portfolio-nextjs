import { getApiDocs } from "@/lib/swagger"

import ReactSwagger from "./react-swagger"

export default async function IndexPage() {
  const spec = await getApiDocs()
  return (
    <>
      <header className='header__page'>
        <div className="header__opacity">
          <div className="header__container text-white">
            <nav>
              <a href="/api">Voltar para API</a>
            </nav>
          </div>
        </div>
      </header>
      <section className="container">
        <ReactSwagger spec={spec} />
      </section>
    </>
  )
}