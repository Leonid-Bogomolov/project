import style from './style.module.css'
//import Fact from '../Fact'
import facts from '../../data/facts.json'
import FactCard from '../FactCard'
import happy_bean from '../../images/happy-bean.png'

const FactsCards = () => {
    //console.log(facts.items)
    return (
        <div className={style.container}>
            <h1>Explore All Facts ...</h1>
            <div className={style.flexContainer}>
                <div className={style.imgContainer}>
                <img src={happy_bean} alt="happy-bean" className={style.happy_bean}></img>
                </div>
                {facts.items.map((fact) => {
                    //console.log(fact)
                    return <FactCard data={fact} key={fact.factId} />
                })}
            </div>
        </div>
    )
}

export default FactsCards
