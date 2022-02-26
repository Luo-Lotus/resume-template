import {Button, Card, DatePicker, Form, Input,Space} from "antd";
import { userInfo } from "os";
import {FC,useState,useContext,Dispatch} from "react"
import style from "./index.module.less"
import EditbleText from "../EditbleText"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from "moment"
import{dataContext,Component} from "../dataContext";
const component:FC = ()=>{
    //@ts-ignore
    const {data,dispatch} = useContext(dataContext)
    console.log(data);
    
    const [form, setForm] = useState({
        userInfo:{
            avatar:"hh",
            name:"罗天翔",
            otherInfo:[
                {label:"学历",value:"本科"}
            ]
        },
        educationEconomics:[{
            school:"",
            marjor:"",
            college:"",
            Education:"",
            time:""
        }],
        professionalSkill:``,
        personalSummary:`哈哈哈哈`,
        certificate:``
    
   })
    const formChange = (value:any,allValue:any)=>{
        setForm(allValue)
        console.log(form);
   }
    const Item = Form.Item
    return (
        <>
        <Button onClick={()=>dispatch({index:0,data:form})}>分发</Button>
        <Form
         style={{padding:"10px"}} onValuesChange={formChange}
         initialValues={form}
         >
            <Space direction="vertical" size={'middle'}>
            <Card title="个人信息">
                <Form.Item label="姓名" name={['userInfo','name']}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="头像" name={['userInfo','avatar']}>
                    <Input></Input>
                </Form.Item>
                <Form.List name={['userInfo','otherInfo']}>
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                            <Form.Item
                            name={[name, 'label']}
                            >
                            <Input placeholder="信息名称" />
                            </Form.Item>
                            <Form.Item
                            name={[name, 'value']}
                            >
                            <Input placeholder="信息" />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                        ))}
                        <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            点击添加信息
                        </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
            </Card>
            <Card title="教育经历">
                <Form.List name={["educationEconomics"]}>
                    {(fields,{add,remove})=>(
                        <>
                        {fields.map(({ key, name, ...restField })=>(
                        <Card key={key}>
                            <Form.Item name={[name,"school"]} label="学校">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"Education"]} label="学历">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"marjor"]} label="专业">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"college"]} label="学院">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"date"]} label="时间">
                                <DatePicker.RangePicker format={'YYYY年MM月'} picker="month"></DatePicker.RangePicker>
                            </Form.Item>
                            <Button type="dashed" onClick={() => remove(key)} block icon={<PlusOutlined />}>
                            删除该项
                        </Button>

                        </Card>
                        ))}
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            点击添加教育经历
                        </Button>
                        </>
                    )}
                </Form.List>
            </Card>
            <Card title="主要课程">
                <Form.Item name={"mainCourse"}>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
            </Card>
            <Card title="专业技能">
                <Form.Item name={"professionalSkill"}>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
            </Card>
            <Card title="个人总结">
                <Form.Item name={"personalSummary"}>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
            </Card>
            <Card title="荣誉证书">
                <Form.Item name={"certificate"}>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
            </Card>
            </Space>
        </Form>
    </>
    )
}
export default component;