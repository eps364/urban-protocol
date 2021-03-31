import { NextPage} from 'next'
import Link from 'next/link'
import React, { useContext } from 'react'
import { RolesContext } from '../../context/RolesContext'



const Role: NextPage = () => {
  const roles = useContext(RolesContext)
  return (
    <div>
        <ul>          
        {
          roles.map((item) => (
            <li key={item.id}>
                <Link href={item.pageContext} key={item.id}><a>{item.description}</a></Link> </li>
          ))
        }
        </ul>
    </div >
  )
}

export default Role