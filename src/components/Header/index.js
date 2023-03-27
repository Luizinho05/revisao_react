import { Link } from 'react-router-dom'

function Header(){
    return(
        <div>
            <Link to='/'>ínicio</Link>
            <Link to='/Qsomos'>Quem Somos</Link>
            <Link to='/Cadastro'>Cadastro</Link>
        </div>
    )
}

export default Header