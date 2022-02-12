import {FC, useState} from "react"
import {Avatar} from "antd";
import { Descriptions } from "antd";
import style from "./index.module.less"
interface props{
    title:string,
}
const ModuleCard:FC<props> = ({title,children})=>{

    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )

}
export default ModuleCard;