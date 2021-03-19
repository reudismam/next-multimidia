import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Email from '../components/Email'
import Titulo from '../components/Titulo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={styles.container}>
          <div className={styles.cover}>
            <div className={styles.menu}>

            </div>
            <Titulo title="Pay With Piece of Mind"/>
            <Email />
          </div>
      </div>
    </div>
  )
}
