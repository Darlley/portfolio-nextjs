import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import '@/styles/nprogress.css'
import {Router} from 'next/router'
import NProgress from 'nprogress'
import {Analytics} from '@vercel/analytics/react';

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// type AppProps = {
//   Component: NextPage<any>;
//   pageProps: any;
// }
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Analytics />
      </SessionProvider>
    </>
  )
}
