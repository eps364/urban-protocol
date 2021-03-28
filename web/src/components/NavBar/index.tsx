import { NextPage } from 'next'
import Link from 'next/link'
import { useContext } from 'react'
import { RolesContext } from '../../context/RolesContext'
import { Role } from '../../interfaces/Role'

interface Menu {
  id: number,
  father?: string,
  pageContext?: string
}

const NavBar: NextPage = () => {
  const roles: Role[] = useContext(RolesContext)

  const menu: Menu[] = []

  if(menu.length<1){
    roles.map(item => {
      if (!menu.find(tem => tem.father === item.father)) {
        menu.push({ id: item.id, father: item.father, pageContext: item.pageContext })
      }
    }) 
    }else {
      menu.push({"id": 0,"father": "Home", "pageContext": "/"})
  
    console.log(menu)
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