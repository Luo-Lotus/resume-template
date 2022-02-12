import {FC, useEffect, useState,CSSProperties} from "react"
import {Avatar} from "antd";
import style from  "./index.module.less"
import avatar from "../../assete/avatar.png"
import { Descriptions } from "antd";
interface info{
    label:string,
    value:string
}
const PersonInfo:FC = ()=>{
    useEffect(()=>{
        console.log(style.info);
    },[])
    const [data,setData] = useState<info[]>([
        {
            label:"姓名",
            value:"罗天翔"
        },
        {
            label:"学历",
            value:"本科"
        },
        {
            label:"电话",
            value:"18582682247"
        },
        {
            label:"邮箱",
            value:"272146019@qq.com"
        },
        {
            label:"个人网站",
            value:"https://www.nanotus.cn/lotus/blog/Lotus"
        },
        {
            label:"gitee",
            value:"https://www.gitee.com/LLLotus"
        },
        {
            label:"专业",
            value:"数据科学与大数据技术"
        },
        {
            label:"学校",
            value:"电子科技大学成都学院"
        },
        {
            label:"意向",
            value:"前端开发"
        },
    ])
    return (
        <div className={style.container}>
            <Avatar className={style.avatar} src={avatar}/>
            <div className={style.name}>罗天翔</div>
            {data.map(x=>
            <div className={style.info}>
                <div className={style.  label}>{x.label}</div>
                {x.value.startsWith("http")?
                <a className={style.value} href={x.value} >{x.value}</a>:
                <div className={style.value}>{x.value}</div>}
            </div>
            )}
        </div>
    )

}

export default PersonInfo;