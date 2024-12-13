import { ChangeEvent, Dispatch, FC, useState } from 'react'
import style from './style.module.css'

type Props = {
    setFilterValue: Dispatch<React.SetStateAction<string>>          // определяем props-ы для компонента Search
}

//const Search = () => {
const Search: FC<Props> = ({ setFilterValue }) => {                 // передаём пропсы нашему компоненту
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value)
        setInputValue(event.target.value)
    }

    //console.log(inputValue)
    const handleClick = () => {
        setFilterValue(inputValue)                                    // после клика на кнопку перезапишем текущее значение
        //alert(inputValue)
    }


    return (
        <div className={style.container}>
            <input
                value={inputValue}                                      // таким образом сделали input управляемым 
                type='text'
                placeholder='Наименование'
                onChange={(event) => handleChange(event)} 
            />
            <button onClick={handleClick}>Найти</button>
        </div>
    )
}

export default Search
