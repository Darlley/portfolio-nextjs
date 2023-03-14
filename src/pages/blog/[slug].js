
import HeaderPage from '@/components/molecules/HeaderPage';
import { useRouter } from 'next/router'


function Article() {
  const router = useRouter()
  const { slug } = router.query
  
  return (
    <>
      <HeaderPage>
        <h1>{slug}</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <h2>{slug}</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Article;
