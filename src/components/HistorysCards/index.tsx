import style from './style.module.css'
//import Cobination from '../Combination'
import historys from '../../data/historys.json'
import HistoryCard from '../HistoryCard'
import happy_bean from '../../images/happy-bean.png'

const HistorysCards = () => {
    //console.log(combinations.items)
    return (
        <div className={style.container}>
            <h1>Explore History ...</h1>
            <div className={style.flexContainer}>
                <div className={style.imgContainer}>
                <img src={happy_bean} alt="happy-bean" className={style.happy_bean}></img>
                </div>
                {historys.items.map((history) => {
                    //console.log(fact)
                    return <HistoryCard data={history} key={history.mileStoneId} />
                })}
            </div>
        </div>
    )
}

export default HistorysCards
