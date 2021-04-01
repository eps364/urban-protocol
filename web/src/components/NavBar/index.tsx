import { NextPage } from 'next';
import Link from '@material-ui/core/Link';
import { useContext } from 'react';
import { RolesContext } from '../../context/RolesContext';
import { Button } from '@material-ui/core';

//import { Role } from '../../interfaces/Role'

interface MenuList {
  id: number;
  father: string;
  pageContext: string;
}

const NavBar: NextPage = () => {
  const roles = useContext(RolesContext);
  //if(roles===null) throw new Error("Roles null");

  const menu: MenuList[] = [{ id: 0, father: 'Home', pageContext: '/' }];

  if (menu.length <= 1) {
    roles.map((item) => {
      if (!menu.find((tem) => tem.father === item.father)) {
        menu.push({
          id: item.id,
          father: item.father,
          pageContext: item.pageContext,
        });
      }
    });
  }

  return (
    <nav>
      <div className="logo">
        <h1>{process.env.NAME}</h1>
        Você esta logado como: <strong>José da Silva</strong>
      </div>
      <div>
        {menu.map((item) => (
          <Button 
              variant="text"
              onClick={() => {
              console.info("I'm a button.");
              }}
                href={item.pageContext} key={item.id}
            >
                {item.father}
              </Button>
            ))}

      </div>
    </nav>
  );
};

export default NavBar;
