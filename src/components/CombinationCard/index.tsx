import style from './style.module.css'
import { combinaton } from '../../types/combination'
import { FC } from 'react'

type Props = {
    data: combinaton
}

const CombinationCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.combination}>
            <div className={style.title}>
                <h2>
                    <span>{data.name}</span>
                </h2>
                <p>{data.tag}</p>
            </div>
        </div>
    )
}

export default CombinationCard
