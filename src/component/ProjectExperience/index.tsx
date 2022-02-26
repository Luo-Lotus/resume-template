import {FC, useState,useContext} from "react"
import { dataContext } from "../dataContext"
import style from "./index.module.less"

const component:FC = ()=>{
    //@ts-ignore
    const {data:{projectExperience}} = useContext(dataContext)
    return (
        <>
            {projectExperience.filter((x:any)=>x!=null&&x!=undefined&&Object.keys(x).length>0).map((project:any,index:number)=>(
                <div className={style.container} key={project?.projectName+index}>
                    <div className={style.title}>{project?.projectName}</div>
                    <ul>
                        {project?.description?.split(/[\n]/).map((introduce:any)=>(
                            <li key={introduce}>{introduce}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
export default component;