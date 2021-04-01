import { createContext, useEffect, useState } from 'react';
import { RoleName, IRole } from '../shared/interfaces/IRole';

export const RolesContext = createContext<IRole[]>([
  {
    id: 0,
    name: RoleName.ROLE_HOME,
    description: 'Home inicial',
    father: 'Home',
    menuDescription: 'Home',
    pageContext: '/',
  },
]);

const RolesProvider: React.FC = (props) => {
  const [roles, setRoles] = useState<IRole[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/roles`);
      const rolesJson = await res.json();
      setRoles(rolesJson);
    }
    fetchData();
  }, []);
  return (
    <RolesContext.Provider value={roles}>
      {props.children}
    </RolesContext.Provider>
  );
};

export default RolesProvider;
