import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao <strong><a href={process.env.HOST}>{process.env.NAME}</a></strong>
        </h1>

        <p className={styles.description}>
          Abertura de protocolo.
        </p>

        <div className={styles.grid}>
          <Link href="/">
            <a>Home</a>
          </Link>

        </div>
      </main>
      <Footer />
    </div>
  )
}

