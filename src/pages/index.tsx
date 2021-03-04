import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>
          Site instituicional para o INSTITUTO CANDELÁRIA RO em construção
        </h1>
      </main>
    </div>
  )
}
