import { FC } from 'react'
import { Bean } from '../../types/bean'
import style from './style.module.css'
import { Link } from 'react-router-dom'

type Props = {
    data: Bean
}

/*interface Props {
    title: string
    image?: string                                  // знак "?" ставится, если атрибут не обязателен
}*/

const Card: FC<Props> = ({ data }/*{
        title,
        image
    //  image = "https://cdn-tp1.mozu.com/9046-m1/cms/files/63b9e71d-9866-4044-9af7-7a64a52b0e0e"   // в случае, если значение атрибута нужно принять по умолчанию
    }*/) => {
    //console.log(title)
    return (
        <Link to={`/Bean/${data.beanId}`} className={style.card}>
            <h2>{data.flavorName}</h2>
            <div className='img-div'>
                <img className='card-img' src={data.imageUrl} alt=''></img>
            </div>
            <p>{data.description}</p>
            {data.sugarFree ? <p>Not sugar</p> : <p>with sugar</p>}
        </Link>
    )
}

export default Card
