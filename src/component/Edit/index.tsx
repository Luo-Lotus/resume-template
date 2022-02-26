import {Button, Card, DatePicker, Form, Input,Space, Upload,message} from "antd";
import { userInfo } from "os";
import {FC,useState,useContext,Dispatch, useEffect} from "react"
import style from "./index.module.less"
import EditbleText from "../EditbleText"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from "moment"
import{dataContext,Component} from "../dataContext";
import { log } from "console";
const component:FC = ()=>{
    //@ts-ignore
    const {data,dispatch} = useContext(dataContext)
    const [form, setForm] = useState(data)
    const formChange = (value:any,allValue:any)=>{
        allValue.userInfo.otherInfo = allValue.userInfo.otherInfo.map((x:any)=>x==undefined||x==null||Object.keys(x).length==0||x.label==undefined?{label:"",value:""}:x)
        allValue.educationEconomics = allValue.educationEconomics.map((x:any)=>x.school==undefined?{college: "",
        date: "",
        description: "",
        education: "",
        marjor: "",
        school: ""}:x)
        allValue.projectExperience = allValue.projectExperience.map((x:any)=>{
            return x==undefined||x==null||Object.keys(x).length==0||x.projectName==undefined?{projectName:"",description:""}:x
        })
        
        dispatch({index:0,data:allValue})
        setForm(allValue)
   }
   const getBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
   const uploader = {
    beforeUpload: (file:any) => {
        const isPNG = (file.type == 'image/jpeg');
        if (!isPNG) {
          message.error(`${file.name} 不是图片`);
        }
        return false
      },
   }
   const handleUpload = (arg:any)=>{
        getBase64(arg.file.originFileObj).then(res=>{
            form.userInfo.avatar = res 
            setForm(form)

            dispatch({index:0,data:form})
        })
        return ""
   }
    return (
        <>
        <Form
         style={{padding:"10px"}} onValuesChange={formChange}
         initialValues={form}
         >
            <Space direction="vertical" size={'middle'}>
            <Card title="个人信息">
                <Form.Item label="姓名" name={['userInfo','name']}>
                    <Input></Input>
                </Form.Item>
                <Form.Item label="头像" getValueFromEvent={handleUpload} name={['userInfo','avatar']}>
                    <Upload><Button>上传头像</Button></Upload>
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
                            <Form.Item name={[name,"education"]} label="学历">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"marjor"]} label="专业">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"college"]} label="学院">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"date"]} label="时间">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"description"]} label="在校经历">
                                <Input.TextArea autoSize></Input.TextArea>
                            </Form.Item>
                            <Button type="dashed" danger onClick={() =>{remove(name)}} block icon={<MinusCircleOutlined />}>
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
                    <Input.TextArea autoSize></Input.TextArea>
                </Form.Item>
            </Card>
            <Card title="专业技能">
                <Form.Item name={"professionalSkill"}>
                    <Input.TextArea autoSize></Input.TextArea>
                </Form.Item>
            </Card>
            <Card title="项目经历">
                <Form.List name={["projectExperience"]}>
                    {(fields,{add,remove})=>(
                        <>
                        {fields.map(({ key, name, ...restField })=>(
                        <Card key={key}>
                            <Form.Item name={[name,"projectName"]} label="项目名称">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name={[name,"description"]} label="描述">
                                <Input.TextArea autoSize></Input.TextArea>
                            </Form.Item>
                            <Button type="dashed" danger onClick={() => remove(key)} block icon={<MinusCircleOutlined />}>
                            删除该项
                        </Button>

                        </Card>
                        ))}
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            点击添加项目
                        </Button>
                        </>
                    )}
                </Form.List>
            </Card>
            <Card title="个人总结">
                <Form.Item name={"personalSummary"}>
                    <Input.TextArea autoSize></Input.TextArea>
                </Form.Item>
            </Card>
            <Card title="荣誉证书">
                <Form.Item name={"certificate"}>
                    <Input.TextArea autoSize></Input.TextArea>
                </Form.Item>
            </Card>
            </Space>
        </Form>
    </>
    )
}
export default component;