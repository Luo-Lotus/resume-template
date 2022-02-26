import { Input } from "antd"
import {FC,useState,ChangeEventHandler, ChangeEvent,KeyboardEventHandler, KeyboardEvent, useContext} from "react"
import style from "./index.module.less"

const component:FC = ()=>{
    const [isEditing, setIsEditing] = useState(false)
    const [value,setValue] = useState("haha")
    return (
        <div onDoubleClick={()=>setIsEditing(true)}>
            {isEditing?
            <Input 
                value={value}
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}
                onPressEnter={(e:KeyboardEvent)=>{setIsEditing(!isEditing)}}
                />:
            <div>{value}</div>
        }
        </div>
    )
}
export default component;