import {FC, useEffect, useState,CSSProperties, useContext} from "react"
import {Avatar} from "antd";
import style from  "./index.module.less"
import avatar from "../../assete/avatar.svg"
import { Descriptions } from "antd";
import { dataContext } from "../dataContext";

const PersonInfo:FC = ()=>{
    //@ts-ignore
    const {data:{userInfo},dispatch} = useContext(dataContext)
    useEffect(()=>{
    },[])
    return (
        <div className={style.container}>
            <Avatar className={style.avatar} src={userInfo.avatar||avatar}/>
            <div className={style.name}>{userInfo.name}</div>
            {userInfo.otherInfo.filter((x:any)=>x!=null&&x!=undefined&&Object.keys(x).length!=0).map((x:{label:string,value:string})=>
            <div className={style.info} key={x.label}>
                <div className={style.  label}>{x.label}</div>
                <div className={style.value}>{x.value}</div>
            </div>
            )}
        </div>
    )

}

export default PersonInfo;