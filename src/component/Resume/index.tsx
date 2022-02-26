import {FC, useContext} from "react"
import PersonInfo from "../PersonInfo/index"
import {Row,Col,Button} from 'antd'
import ModuleCard from "../ModuleCard"
import EducationEconomics from "../EducationEconomics"
import MainCourse from "../MainCourse"
import ProjectExperience from "../ProjectExperience"
import ProfessionalSkill from "../ProfessionalSkill"
import Certificate from "../Certificate"
import PersonalSummary from "../PersonalSummary"
import template from "../TemplateComponent"
import html2canvas from 'html2canvas';
import jsPDF from "jspdf"
import { dataContext } from "../dataContext"
const Resume:FC = ()=>{
    //@ts-ignore
    const {data:{userInfo},dispatch} = useContext(dataContext)
    const clickHandle = ()=>{
        html2canvas(document.getElementById("resume-container") as HTMLElement)
        .then(function(canvas) {
            const imgData = canvas.toDataURL('image/jpeg');
            document.body.appendChild(canvas);
            const img  = new Image()
            img.src = imgData
            img.onload = function(){
                const _this = this as HTMLImageElement
                if (_this.width > _this.height) {
                    var doc = new jsPDF('l', 'mm', [_this.width * 0.225, _this.height * 0.225]);
                   } else {
                    var doc = new jsPDF('p', 'mm', [_this.width * 0.225, _this.height * 0.225]);
                   }
                doc.addImage(imgData, 'jpeg', 0, 0, _this.width * 0.225, _this.height * 0.225);
                //根据下载保存成不同的文件名
                doc.save(userInfo.name?userInfo.name:"未命名" + "的简历" + '.pdf');
                }
            document.body.removeChild(canvas)
        });
    }
    return (
        <>
        <div style={{padding:"40px"}} id="resume-container">
        <Row className="container">
            <Col span={8} className="info">
                <PersonInfo></PersonInfo>
            </Col>
            <Col span={16} className="avatar">
                <ModuleCard title="教育经历">
                    <EducationEconomics></EducationEconomics>
                </ModuleCard>
                <ModuleCard title="主要课程">
                    <MainCourse></MainCourse>
                </ModuleCard>
                <ModuleCard title="专业技能">
                    <ProfessionalSkill></ProfessionalSkill>
                </ModuleCard>
                <ModuleCard title="项目经历">
                    <ProjectExperience></ProjectExperience>
                </ModuleCard>
                <ModuleCard title="个人总结">
                    <PersonalSummary></PersonalSummary>
                </ModuleCard>
                <ModuleCard title="荣誉与证书">
                    <Certificate></Certificate>
                </ModuleCard>
            </Col>
        </Row>
        </div>
        <div style={{padding:"40px"}}>
            <Button onClick={clickHandle} block size="large" type="primary">保存为PDF</Button>
        </div>
        
        </>
    )
}
export default Resume