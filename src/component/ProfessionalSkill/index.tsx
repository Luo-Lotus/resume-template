import {FC, useState} from "react"
import style from "./index.module.less"

const component:FC = ()=>{
    const [skills,setSkills] = useState([
        '在校主要使用 Java，JavaScript，Python',
        'Vue技术栈，熟练使用HTML与CSS',
        '了解React，uni-app，TypeScript',
        '了解Django，SpringBoot等后端框架的基本使用',
        '了解Linux，Git，Docker，MySQL数据库的基本使用',
        '热爱前端行业，关注最新技术',
    ])
    return (
        <>
            {skills.map((item,index)=>(
                <div key={item}><strong>{index+1}.{item}</strong></div>
            ))}
        </>
    )
}
export default component;