import Logo from "../Logo/Logo"
import Nav from "../Nav/index"
//import SwitchTheme from "../SwitchTheme"
import style from './style.module.css'

const Header = () => {
    return (
        <header className={style.container}>
            <Logo />
            <Nav />
            {/*<SwitchTheme /> */}
        </header>
    )
}

export default Header
