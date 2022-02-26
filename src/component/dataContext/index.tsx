import { createContext, FC, useReducer } from "react";

interface actionType{
    index:number
    data:Object
}

export const dataContext = createContext({})
const reducer = (state:any,action:actionType)=>{
    console.log(action);
    console.log(state);
    
    switch(action.index) {
        case 0:
          return action.data
        default:
          return state
      }
    
}
export const Component:FC = ({children})=>{
    const [data,dispatch] = useReducer(reducer,{})
    return (
            <dataContext.Provider value={{data,dispatch}}>
                {children}
            </dataContext.Provider>
        )
}