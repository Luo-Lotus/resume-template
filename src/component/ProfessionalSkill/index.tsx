import {FC, useContext, useState} from "react"
import { dataContext } from "../dataContext"
import style from "./index.module.less"

const component:FC = ()=>{
    //@ts-ignore
    const {data:{professionalSkill}} = useContext(dataContext)
    return (
        <>
            {professionalSkill.split(/\n/).map((item:number,index:string)=>(
                <div key={item}><strong>{index+1}.{item}</strong></div>
            ))}
        </>
    )
}
export default component;