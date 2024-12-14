//import SwitchTheme from '../SwitchTheme'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={style.container}>
                <Link to="/beans">Beans</Link>
                <Link to="/facts">Facts</Link>
                <Link to="/recipies">Recipies</Link>
                <Link to="/combinations">Combinations</Link>
                <Link to="/history">History</Link>
        </nav>
    )
}

export default Nav
