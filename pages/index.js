import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I'm Sealtiel Nielsen M. Salazar and my hobbies are playing games, watching movies and listening to music, I dont have any favorite music because I like them all. My favorite food is fried chicken. I see myself in 5 years is that I am struggling but thriving, and I can use this knowledge about this topic System Integration in the future.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}