import { NextPage } from 'next'
import Footer from '../Footer'
import Header from '../Header'
import NavBar from '../NavBar'

const Layout: NextPage = ({ children }) => {
    const session = true
    return (
        <>
        < div className="content" >
            { session ? <NavBar /> : <Header />}
            { children}
            <Footer />
        </div >
        
        </>

    )
}
export default Layout