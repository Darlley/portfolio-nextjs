'use client'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import '@/styles/globals.css'
import '@/styles/nprogress.css'
import {Router} from 'next/router'
import NProgress from 'nprogress'
import {Analytics} from '@vercel/analytics/react';
import AuthProvider from '../components/providers/auth-provider';

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='dark'>
        <body className={inter.className}>
          <AuthProvider>
            {children}
            <Analytics />
          </AuthProvider>
        </body>
    </html>
  )
}
