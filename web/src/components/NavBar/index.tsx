import { NextPage } from 'next'
import Link from 'next/link'
import { useContext } from 'react'
import { RolesContext } from '../../context/RolesContext'
//import { Role } from '../../interfaces/Role'

interface Menu {
  id: number,
  father: string,
  pageContext: string
}

const NavBar: NextPage = () => {
  const roles = useContext(RolesContext)
  //if(roles===null) throw new Error("Roles null");

  const menu: Menu[] = [{"id": 0,"father": "Home", "pageContext": "/"}]

  if(menu.length<=1){
    roles.map(item => {
      if (!menu.find(tem => tem.father === item.father)) {
        menu.push({ id: item.id, father: item.father, pageContext: item.pageContext })
      }
    }) 
  }  

  return (
    <nav>
      <div className="logo">
        <h1>{process.env.NAME}</h1>

            Você esta logado como: <strong>José da Silva</strong>
      </div>
      <div>

        {
          menu.map((item) => (
            <Link href={item.pageContext} key={item.id}><a>{item.father}</a></Link>
          ))
        }
      </div>
    </nav >
  )
}

export default NavBar