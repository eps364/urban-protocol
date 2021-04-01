import { NextPage } from 'next';
import Box from '@material-ui/core/Box';

const Header: NextPage = () => {
  return (
    <Box>
      <h1>
        Bem vindo ao{' '}
        <strong>
          <a href="/" target="_blank">
            {process.env.NEXT_PUBLIC_NAME}
          </a>
        </strong>
      </h1>
    </Box>
  );
};
export default Header;
