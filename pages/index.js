import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sairam School Awards 2022</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      </Head>

      <main>
        <Header title="Welcome to Sairam School Awards 2022!" />
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shreGsqHV7ztONvKr?backgroundColor=cyan"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="761"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        ></iframe>
      </main>
      <Footer />
    </div>
  );
}
