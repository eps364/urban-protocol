import { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
    return (
        <nav>
          <div className="logo">
            <h1>{process.env.NAME}</h1>
            Você esta logado como: <strong>José da Silva</strong>
          </div>
          <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/protocol"><a>Protocolo</a></Link>
            <Link href="/groups"><a>Grupo</a></Link>
            <Link href="/users"><a>Usuários</a></Link>
            <Link href="/audit"><a>Auditoria</a></Link>
          </div>
        </nav>
      )
    }
export default NavBar

