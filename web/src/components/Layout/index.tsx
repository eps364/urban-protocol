import { NextPage } from 'next';
import Container from '@material-ui/core/Container';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';

const Layout: NextPage = ({ children }) => {
  const session = true;
  return (
    <>
      <Container maxWidth="sm">
        {session ? <NavBar /> : <Header />}
        {children}
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
