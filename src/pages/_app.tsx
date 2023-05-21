import '@/styles/globals.css'
import '@/styles/nprogress.css'
import { NextPage } from 'next';
import {Router} from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type AppProps = {
  Component: NextPage<any>;
  pageProps: any;
}
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
