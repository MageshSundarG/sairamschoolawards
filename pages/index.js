import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shreGsqHV7ztONvKr?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="761" style="background: transparent; border: 1px solid #ccc;"></iframe>
      </main>
      <Footer />
    </div>
  )
}
