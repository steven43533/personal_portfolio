import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        
        <section className={utilStyles.headingMd}>
          <p>Hello!</p>
        </section>
      </Layout>
    </div>

  )
}