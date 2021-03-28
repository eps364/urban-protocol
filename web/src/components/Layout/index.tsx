import { NextPage } from 'next'
import Footer from '../Footer'
import Header from '../Header'
import NavBar from '../NavBar'

const Layout: NextPage = ({ children }) => {
    const session = false
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