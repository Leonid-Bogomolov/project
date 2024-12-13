import style from './style.module.css'
import Card from '../Card'
import { Bean } from '../../types/bean'
import { FC, useEffect, useState } from 'react'
type Props = { filterValue: string }                                             // определяем пропсы для сомпоненты Cards
const Cards: FC<Props> = ({ filterValue }) => {
    const [initialBeans, setInitialBeans] = useState<null | Bean[]>(null)                               // исходные ббоббы
    const [updateBeans, setUpdateBeans] = useState<null | Bean[]>(null)                                 // обновлённые бобы
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const getData = async () => {
        try {
            setIsError(false)
            setIsLoading(true)
            const req = await fetch(
                "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100")     // pageSize= "число выводимых карточек"
            const data = await req.json()
            setIsLoading(false)
            setInitialBeans(data.items)
            setUpdateBeans(data.items)
        } catch {
            setIsLoading(false)
            setIsError(true)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        if (filterValue) {
            const newArray = initialBeans?.filter((item) => item.flavorName.includes(filterValue))      // создаём массив из названий карт 
            if (newArray) {
                setUpdateBeans(newArray)
            }
            console.log("newArray", newArray)
        } else {
            setUpdateBeans(initialBeans)
        }
    }, [filterValue])
    return (
        <div className={style.container}>
            {isLoading && <p>...loading</p>}
            {isError && <p>Перезагрузите страницу</p>}
            {updateBeans &&
                updateBeans.map((bean) => <Card data={bean} key={bean.beanId} />)                   // укороченная запись map
            }
        </div>
    )
}
export default Cards
