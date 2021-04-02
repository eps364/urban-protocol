import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main>
      <p>
        Sistema de abertura e acompanhamento de protocolo.
      </p>

      <div>
        <a href="/protocol">
          <h3>Abrir Protocolo &rarr;</h3>
          <p>Gostaria de abrir um protocolo, clique aqui!.</p>
        </a>

        <a href="/protocol/query" >
          <h3>Consultar Protocolo &rarr;</h3>
          <p>Gostaria de consultar um protocolo, consulte aqui!</p>
        </a>
      </div>
    </main>
  )
}

export default Home

