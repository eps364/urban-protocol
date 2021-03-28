import { NextPage } from 'next'

const Header: NextPage = () => {
    return (
        <header>
            <h1>Bem vindo ao <strong><a href="/" target="_blank">{process.env.NEXT_PUBLIC_NAME}</a></strong></h1>
        </header>
    )
}
export default Header