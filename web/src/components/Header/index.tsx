import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Header = () => (
  <div>
    <Head>
      <title>{process.env.NAME}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      

    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
  </div>
)

export default Header
