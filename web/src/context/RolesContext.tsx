import { createContext, useEffect, useState } from 'react';
import { RoleName, Role } from '../interfaces/Role'

export const RolesContext = createContext<Role[]>([{
    "id": 0,
    "name": RoleName.ROLE_HOME,
    "description": "Home inicial",
    "father": "Home",
    "menuDescription": "Home",
    "pageContext": "/"
}])

const RolesProvider: React.FC = (props) => {
    const [roles, setRoles] = useState<Role[]>([])

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
            value={roles}
        >
            {props.children}
        </RolesContext.Provider>
    )
}

export default RolesProvider






