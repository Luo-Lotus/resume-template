import {FC} from "react"
import PersonInfo from "../PersonInfo/index"
import {Row,Col} from 'antd'
import ModuleCard from "../ModuleCard"
import EducationEconomics from "../EducationEconomics"
import MainCourse from "../MainCourse"
import ProjectExperience from "../ProjectExperience"
import ProfessionalSkill from "../ProfessionalSkill"
import Certificate from "../Certificate"
import PersonalSummary from "../PersonalSummary"
import template from "../TemplateComponent"
const Resume:FC = ()=>{
    return (
        <>
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
                <ModuleCard title="项目经历">
                    <ProjectExperience></ProjectExperience>
                </ModuleCard>
                <ModuleCard title="专业技能">
                    <ProfessionalSkill></ProfessionalSkill>
                </ModuleCard>
                <ModuleCard title="个人总结">
                    <PersonalSummary></PersonalSummary>
                </ModuleCard>
                <ModuleCard title="荣誉与证书">
                    <Certificate></Certificate>
                </ModuleCard>
            </Col>
        </Row>
        </>
    )
}
export default Resume