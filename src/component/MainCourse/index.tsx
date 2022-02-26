import {FC,useContext} from "react"
import { dataContext } from "../dataContext"
import style from "./index.module.less"

const component:FC = ()=>{
        //@ts-ignore
        const {data:{mainCourse}} = useContext(dataContext)
    return (
        <div>
             {mainCourse.split(/[\n]/).map((x:string)=>
                <div key={x}>{x}</div>
            )}
        </div>
    )
}
export default component;