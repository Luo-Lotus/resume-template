import {FC, useContext} from "react"
import { dataContext } from "../dataContext"
import style from "./index.module.less"

const component:FC = ()=>{
    //@ts-ignore
    const {data:{educationEconomics}} = useContext(dataContext)
    return (
    <div>
            {educationEconomics.map((x:any,index:number)=>(
            <div className={style.container} key={x?.school+index}>
                <div className={style.school}>
                    <div><strong>{x?.school} {x?.education}</strong></div>
                    <div>{x?.date}</div>
                </div>
                <div className={style.school}>
                    <div>{x?.marjor} {x?.college}</div>
                    <div></div>
                </div>
                <div>{x?.description}</div>
            </div>
            ))}
    </div>)
}
export default component