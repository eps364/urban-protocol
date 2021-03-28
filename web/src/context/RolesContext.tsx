import { createContext, useEffect, useState } from 'react'

export const RolesContext = createContext({})

export const RolesProvider = (props) => {
    const [roles, setRoles] = useState()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:3000/api/roles')
            const rolesJson = await res.json()
            setRoles(rolesJson)
        }
        fetchData();
      }, []); 
    return (
        <RolesContext.Provider
            value={ roles }>
                {props.children}
        </RolesContext.Provider>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/roles')
    const data = await res.json()
    return {
        props: {
            roles: data
        }
    }
  }





