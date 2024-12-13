/*import { useContext } from 'react'
import './switchTheme.css'
import { ThemeContext } from '../../App'

const SwitchTheme = () => {
    const currentTheme = useContext(ThemeContext)         // текущее значение
    //console.log("currentTheme", currentTheme)           // текущее значение 

    const handleClick = () => {
        if (currentTheme?.theme === "dark") {
            currentTheme.setTheme("light")
        } else {
            currentTheme?.setTheme("dark")
        }
    }
    return <div className='theme' onClick={handleClick}>
                <div className="dark-theme"></div>
                /
                <div className="light-theme"></div>
            </div>
}
//return <div>theme</div>
//}

export default SwitchTheme*/
