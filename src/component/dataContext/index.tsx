import { createContext, FC, useReducer } from "react";
import { json } from "stream/consumers";

interface actionType{
    index:number
    data:Object
}
const localCache =  `{"userInfo":{"name":"","avatar":"","otherInfo":[{"label":"","value":""}]},"educationEconomics":[{"education":"","school":"","marjor":"","college":"","date":"","description":""}],"mainCourse":"","professionalSkill":"","projectExperience":[{"projectName":"","description":""}],"personalSummary":"","certificate":""}`

export const dataContext = createContext({})
const reducer = (state:any,action:actionType)=>{
    localStorage.setItem("data",JSON.stringify(action.data))
    return action.data
    
}
let  localData:any = localStorage.getItem("data")
localData = localData?JSON.parse(localData):JSON.parse(localCache)
export const Component:FC = ({children})=>{
    const [data,dispatch] = useReducer(reducer,localData)
    return (
            <dataContext.Provider value={{data,dispatch}}>
                {children}
            </dataContext.Provider>
        )
}