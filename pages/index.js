import Head from 'next/head'
import Navbar from '../components/navbar'
import FullScreenImage from '../components/fullscreen'
import styles from '../styles/Home.module.css'
import FeatureText from '../components/featureText'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robertson Gymnastics</title>
        <meta name="description" content="Welcome to Robertson Gymnastics Centre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Navbar></Navbar> 
      <FullScreenImage class="relative"></FullScreenImage>
      <FeatureText></FeatureText>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}