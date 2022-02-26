import { useState,FC, useContext, createContext } from 'react'
import logo from './assete/logo.svg'
import './App.css'
import 'antd/dist/antd.less'
import {Affix, Col, Row, Tabs} from "antd"
import Resume from "./component/Resume"
import Edit from "./component/Edit"
import EditbleText from "./component/EditbleText"
import {Component} from './component/dataContext'
const {TabPane} = Tabs
const App:FC = () => {
  const [tabs,setTabs] = useState<string[]>(["前端简历","后端简历"])
  return (
    <div className="app">
      <Component>
        <Row>
          <Col span={6}>
            <Affix >
              <div style={{overflow:'auto',height:"100vh"}}>
                <Edit></Edit>
              </div>
            </Affix>
          </Col>
          <Col span={18}>
            <Resume></Resume>
          </Col>
        </Row>
      </Component>
    </div>
  )
}

export default App
