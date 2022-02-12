import { useState,FC } from 'react'
import logo from './assete/logo.svg'
import './App.css'
import 'antd/dist/antd.less'
import {Tabs} from "antd"
import Resume from "./component/Resume"

const {TabPane} = Tabs
const App:FC = () => {
  const [tabs,setTabs] = useState<string[]>(["前端简历","后端简历"])
  return (
    <Tabs tabPosition={'top'} style={{width:"1080px",margin:"0 auto"}}>
          {tabs.map(i => (
            <TabPane tab={i} key={i} style={{padding:"40px"}}>
              <Resume></Resume>
            </TabPane>
          ))}
    </Tabs>
  )
}

export default App
