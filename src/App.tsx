import { useState,FC } from 'react'
import logo from './assete/logo.svg'
import './App.css'
import 'antd/dist/antd.less'
import {Col, Row, Tabs} from "antd"
import Resume from "./component/Resume"
import Edit from "./component/Edit"
const {TabPane} = Tabs
const App:FC = () => {
  const [tabs,setTabs] = useState<string[]>(["前端简历","后端简历"])
  return (
    <Tabs tabPosition={'top'} style={{margin:"0 auto"}}>
          {tabs.map(i => (
            <TabPane tab={i} key={i} >
              <Row>
                <Col span={6}>
                  <Edit></Edit>
                </Col>
                <Col span={18}>
                  <Resume></Resume>
                </Col>
              </Row>
            </TabPane>
          ))}
    </Tabs>
  )
}

export default App
