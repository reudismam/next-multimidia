import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Email from '../components/Email'
import Titulo from '../components/Titulo'
import HomeContextProvider from '../context/HomeContext'
import {Icon} from '@material-ui/core'
import statistics from '../data/statistics';

export default function Home() {
  return (
    <HomeContextProvider>
      <Head>
        <title>Create Next App</title>
      </Head>

        <div className={styles.container}>
          <div className={styles.cover}>
            <div className={styles.menu}>

            </div>
            <Titulo title="Pay With Piece of Mind"/>
            <Email />
          </div>
         <main className={styles.mainContainer}>
              <div className={styles.mainContent}>
                <div className={styles.statistics}>
                  {
                    statistics.map(item => {
                      return (
                        <div key={item.desc} className={styles.statistic}>
                          <Icon>{item.icon}</Icon>
                          <div>
                            <h4>{item.data}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
         </main>
      </div>
    </HomeContextProvider>
  )
}
