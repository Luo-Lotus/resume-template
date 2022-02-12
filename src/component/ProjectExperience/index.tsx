import {FC, useState} from "react"
import style from "./index.module.less"

const component:FC = ()=>{
    const [projects,setProjects] = useState([
        {
            name:"刷题派小程序",
            content:[
                "前端：原生小程序，后端：Django",
                "用户进行选择题答题的小程序。",
                "完成基本用户操作界面与后台管理界面，通过上传excel表格自动生成题库。",
            ]
        },
        {
            name:"博客系统",
            content:['前端：Vue3，TS，Element Plus，后端：SpringBoot，MybatisPlus',
            '适应PC与移动端布局',
            '前端使用Element-Plus组件库，使用axios发送http请求，并设置拦截器进行token验证',
            '后端使用JWT与shiro进行用户验证',
            '实现websocket聊天室，邮箱注册等功能',
            '使用v-md-editor实现markdown文本编辑器}'
            ]
        },
        {
            name:"比赛项目成员招募系统",
            content:['前端：Vue3，Vant UI ，后端SpringBoot，MybatisPlus',
            '提供类似招聘功能的项目成员招募网站',
            '使用组合式API编写，封装hooks函数',
            '集成QQ第三方登陆']
        }
    ])
    return (
        <>
            {projects.map(project=>(
                <div className={style.container}>
                    <div className={style.title}>{project.name}</div>
                    <ul>
                        {project.content.map(introduce=>(
                            <li>{introduce}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
export default component;