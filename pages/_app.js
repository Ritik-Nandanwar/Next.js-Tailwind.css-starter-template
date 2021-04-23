import '@/css/tailwind.css'

// import { MDXProvider } from '@mdx-js/react'
// import { ThemeProvider } from 'next-themes'
// import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

// import { SEO } from '@/components/SEO'
// import LayoutWrapper from '@/components/LayoutWrapper'
// import MDXComponents from '@/components/MDXComponents'

export default function App({ Component, pageProps }) {
  return (
          <Component {...pageProps} />
  )
}
