import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bean } from "../../types/bean"

const BeanPage = () => {
    const params = useParams()
    const [beanData, setBeanData] = useState<Bean | null>(null)                 // введём переменную состояния

    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(`
                https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
                )
                //console.log(req)
                const data = await req.json()           // поскольку данные приодят ввиде json-объекта(Response), их надо распонсить 
                setBeanData(data)                       // вызываем функцию по изменению состояния и заносим туда то, что распонсили
            } catch (e) {
                console.log("Error->", e)
            }
        }

        getData()
    }, [])
    //console.log(params)
    //console.log(beanData)
    return (
        // <h1>Bean</h1>                                 // преварительная разметка 
        <div>

            {beanData && <div className="">

                    <h1>{beanData.flavorName}</h1>
                    <p>{beanData.description}</p>
                <img src={beanData.imageUrl} alt=""></img>
                <p>{beanData.groupName}</p>
                <p>{beanData.ingredients}</p>
                <div className="grid">
                    <div>{beanData.colorGroup}</div>
                    <div>
                        <p>Hexadecimal Color:</p>
                    </div>
                    
                </div>
            </div>
            }
        </div>
    )
}

export default BeanPage
