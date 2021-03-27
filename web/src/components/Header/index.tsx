import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Header.module.css'


const Header = () => (
  <div className={styles.container}>
    <Head>
      
    </Head>
    <header className={styles.container}>
      <Link href="/">
        Home
      </Link>
    </header>
  </div>
)

export default Header
