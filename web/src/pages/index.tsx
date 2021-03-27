import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao <strong><a href={process.env.HOST}>{process.env.NAME}</a></strong>
        </h1>

        <p className={styles.description}>
          Sistema de abertura e acompanhamento de protocolo.
        </p>

        <div className={styles.grid}>
          <a href="/protocolo" className={styles.card}>
            <h3>Abrir Protocolo &rarr;</h3>
            <p>Gostaria de abrir um protocolo, clique aqui!.</p>
          </a>

          <a href="/protocolo/consulta" className={styles.card}>
            <h3>Consultar Protocolo &rarr;</h3>
            <p>Gostaria de consultar um protocolo, consulte aqui!</p>
          </a>
        </div>
      </main>
      <Footer />
      
    </div>
  )
}

