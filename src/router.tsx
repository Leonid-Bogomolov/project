import { createBrowserRouter } from "react-router-dom";
import Facts from "./pages/Facts";
import Home from "./pages/Home";
import NotFound from "./pages";
import Beans from "./pages/Beans" 
import Recipes from './pages/Recipes';
import Combinations from "./pages/Combinations"
import History from "./pages/History"
import BeanPage from "./pages/Bean";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        loader: Loader ,
        children: [
            { index: true, element: <Home /> },
            { path: "beans", element: <Beans /> },
            { path: "bean/:id", element: <BeanPage /> },
            { path: "recipes", element: <Recipes /> },
            { path: "combinations", element: <Combinations /> },
            { path: "history", element: <History /> },
            { path: "facts", element: <Facts /> },
            { path: "*", element: <NotFound /> },
        ],
    },
    /*{
        path: "/",
        element: <Home />,
    },
    {
        path: "/beans",
        element: <Beans />,
    },
    {
        path: "/bean/:id",              // вместо id может быть другой индентификатор (id, name и т.д.); двоеточие обозначает, что параметр изменяемый и не статичен
        element: <BeanPage />,
    },
    {
        path: "/facts",
        element: <Facts />,
    },
    {
        path: "/recipies",
        element: <Recipies />,
    },
    {
        path: "/combinations",
        element: <Combinations />,
    },{
        path: "/history",
        element: <History />,
    },
    {
        path: "*",                              // * для компонентов, которые не предназначены для пользователей
        element: <NotFound />,
    },*/
])

export default router
