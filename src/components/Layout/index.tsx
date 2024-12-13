import { Outlet } from "react-router-dom"
import Footer from "../Footer/footer"
//import Header from "../Header"

const Layout = () => {           // помещаем наи компоненты в Layout, а уже Layout в router
    return (
    <>
    {/*<Header />*/}
    <main>
        <Outlet />             {/* это специальный компонент в библиотеке "react-router-dom", который встраивает нужные компоненты в зависимости от машрута */}
    </main>
    <Footer />
    </>
    )
}

export default Layout
