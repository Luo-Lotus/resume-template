import {FC} from "react"
import style from "./index.module.less"

const component:FC = ()=>{
    return (
        <div className={style.container}>
            <div className={style.school}>
                <div><strong>电子科技大学成都学院 本科</strong></div>
                <div>2019.9-2023.6</div>
            </div>
            <div className={style.school}>
                <div>数据科学与大数据技术 计算机学院</div>
                <div>成都</div>
            </div>
        </div>
    )
}
export default component