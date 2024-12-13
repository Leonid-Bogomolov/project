import logo_img from '../../images/logo.png'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/project/" className={style.logo}>
            <img src={logo_img} alt=""></img>
            <span>Jelly Belly</span>
        </Link>
    )
}

export default Logo