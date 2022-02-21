import {Button, Card, DatePicker, Form, Input,Space} from "antd";
import { userInfo } from "os";
import {FC,useState} from "react"
import style from "./index.module.less"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from "moment"
const component:FC = ()=>{
   const [form, setForm] = useState({
        userInfo:{
            avatar:"hh",
            name:"罗天翔",
            otherInfo:[
                {label:"学历",value:"本科"}
            ]
        },
        educationEconomics:{
            school:"",
            marjor:"",
            college:"",
            Education:"",
            time:""
        }
   })
    const formChange = (value:any,allValue:any)=>{
        setForm(allValue)
        console.log(form);
        
   }
    const Item = Form.Item
    return (
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
                            Add field
                        </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
            </Card>
            <Card title="教育经历">
                <Form.Item name={["educationEconomics","school"]} label="学校">
                    <Input></Input>
                </Form.Item>
                <Form.Item name={["educationEconomics","Education"]} label="学历">
                    <Input></Input>
                </Form.Item>
                <Form.Item name={["educationEconomics","marjor"]} label="专业">
                    <Input></Input>
                </Form.Item>
                <Form.Item name={["educationEconomics","college"]} label="学院">
                    <Input></Input>
                </Form.Item>
                <Form.Item name={["educationEconomics","date"]} label="时间">
                    <DatePicker.RangePicker format={'YYYY年MM月'} picker="month"></DatePicker.RangePicker>
                </Form.Item>
            </Card>
            <Card title="主要课程">
                <Form.Item name={"mainCourse"}>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
            </Card>
            </Space>
        </Form>
    )
}
export default component;