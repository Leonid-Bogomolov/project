//import SwitchTheme from '../SwitchTheme'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={style.container}>
                <Link to="/project/beans">Beans</Link>
                <Link to="/project/facts">Facts</Link>
                <Link to="/project/recipies">Recipies</Link>
                <Link to="/project/combinations">Combinations</Link>
                <Link to="/project/history">History</Link>
        </nav>
    )
}

export default Nav
