import { NextPage } from 'next';
import Container from '@material-ui/core/Container';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';

const Layout: NextPage = ({ children }) => {
  const session = true;
  return (
    <>
      <Container maxWidth="lg">
        {session ? <NavBar /> : <Header />}
        {children}
        <Sidebar />
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
