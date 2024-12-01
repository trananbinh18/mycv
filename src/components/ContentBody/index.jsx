import React from 'react'
import style from './style.module.css'
import CardWrapper from '../CardWrapper'
import { Row, Col, Divider, Badge, Avatar, Space, Tag, BackTop, Timeline } from 'antd'
import Icon from "@ant-design/icons"
import TableContent from '../TableContent'
import { GithubOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, SkypeOutlined } from '@ant-design/icons'
import SectionTitle from '../SectionTitle'
import ProgressContent from '../ProgressContent'
import { colorSecondary, colorTextSecondary } from '../../vars.module.css'
import TimeLine from '../TimeLine'
import { imageUrlData, tableData, objectiveData, timeLineData, phoneNumberData, emailData, gitHubLinkData, linkedInLinkData, skypeLinkData, languageSkills, toolSkills, beginnerSkills, petProjects, educationData } from '../../data'
import { iconMap } from "../../iconMap.js"
import { VerticalAlignTopOutlined, PrinterOutlined, ReadFilled } from '@ant-design/icons';
import PetProjectContent from '../PetProjectContent'



const styleColorIcon = { color: colorTextSecondary, backgroundColor: colorSecondary }

const ContentBody = () => {
    const getTechComponents = (skills) => {
        return skills.map(element => {
            return (<Tag className={style.techTag} icon={<Icon component={iconMap[element]} />} color={colorSecondary}>{element}</Tag>)
        })
    }

    const getEducationComponent = (educations) => {
        let components = []
        for (const property in educations) {
            components.push((
                <Timeline.Item dot={<ReadFilled style={{ fontSize: "25px", padding: "10px", color: colorSecondary }} />} >
                    <div className={style.contentWrapper}>
                        <div className={style.contentHeader}>
                            <span className={style.time}>{educations[property].time}</span>
                            <div className={style.title}>{property}</div>
                        </div>
                        <ul className={style.contentList}>
                            {educations[property].content.map(element => (
                                <li>
                                    {element}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Timeline.Item>
            ));
        }

        return components;
    }


    return (
        <div className={style.container}>

            {/* intro section÷ */}

            <div className={style.printNoBreak}>

                <CardWrapper>
                    <Badge.Ribbon className={`${style.badgeContainer} ${style.printNoBreak}`} text="Hello & Welcome">


                        <Row>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <img className={style.avatar} src={imageUrlData} />
                            </Col>

                            <Col xs={24} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 2 }} xl={{ span: 12, offset: 2 }} >
                                <div className={style.introWrapper}>
                                    <div className={style.introduceName}>
                                        <span>I'M</span> <span>BINH TRAN</span>
                                    </div>
                                    <div className={style.jobTitle}>Software Engineer</div>

                                    <Divider />

                                    <TableContent data={tableData} />

                                    <Divider />

                                    <div className={style.iconList}>
                                        <Space>
                                            <a href={gitHubLinkData} target="_blank">
                                                <Avatar style={styleColorIcon} shape="square" size="large" icon={<GithubOutlined />} />
                                            </a>

                                            <a href={`tel:${phoneNumberData}`} target="_blank">
                                                <Avatar style={styleColorIcon} shape="square" size="large" icon={<PhoneOutlined />} />
                                            </a>

                                            <a href={`mailto:${emailData}`} target="_blank">
                                                <Avatar style={styleColorIcon} shape="square" size="large" icon={<MailOutlined />} />
                                            </a>

                                            <a href={linkedInLinkData} target="_blank">
                                                <Avatar style={styleColorIcon} shape="square" size="large" icon={<LinkedinOutlined />} />
                                            </a>

                                            <a href={skypeLinkData} target="_blank">
                                                <Avatar style={styleColorIcon} shape="square" size="large" icon={<SkypeOutlined />} />
                                            </a>
                                        </Space>

                                    </div>
                                </div>

                            </Col>
                        </Row>


                    </Badge.Ribbon>
                </CardWrapper>
            </div>

            <div className={style.printNoBreak}>

                {/* Skill section÷ */}

                <SectionTitle title="SKILL" />

                <CardWrapper>
                    <Row className={style.printNoBreak}>
                        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                            <div className={style.objectiveWrapper}>
                                {objectiveData}
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={{ span: 11, offset: 2 }} xl={{ span: 11, offset: 2 }}>
                            <Row>
                                <Col xs={24} sm={24} md={24}><h4>Languages and Frameworks</h4></Col>
                                <Col xs={24} sm={24} md={24}>{getTechComponents(languageSkills)}</Col>
                            </Row>
                            <Row style={{ marginTop: 7 }}>
                                <Col xs={24} sm={24} md={24}><h4>Tools</h4></Col>
                                <Col xs={24} sm={24} md={24}>{getTechComponents(toolSkills)}</Col>
                            </Row>
                            <Row style={{ marginTop: 7 }}>
                                <Col xs={24} sm={24} md={24}><h4>Beginner</h4></Col>
                                <Col xs={24} sm={24} md={24}>{getTechComponents(beginnerSkills)}</Col>
                            </Row>
                        </Col>

                    </Row>

                </CardWrapper>

            </div>

            <div className={style.printNoBreak}>

                {/* Education section÷ */}

                <SectionTitle title="EDUCATION" />
                <CardWrapper>
                    <Timeline mode="left">
                        {getEducationComponent(educationData)}
                    </Timeline>
                </CardWrapper>

            </div>


            {/* Education and work */}

            <div className={style.printNoBreak}>
                <SectionTitle title="WORK EXPERIENCE" />

                <CardWrapper>
                    <TimeLine color={colorSecondary} data={timeLineData} />
                </CardWrapper>
            </div>

            {/* PET Project  */}
            <div className={style.printNoBreak}>
                <SectionTitle title="PET PROJECTS" />

                <CardWrapper>
                    <PetProjectContent data={petProjects} />
                </CardWrapper>
            </div>


            <BackTop className={style.backToTop}>
                <VerticalAlignTopOutlined />
            </BackTop>

            <div onClick={() => window.print()} class={`ant-back-top ${style.printButton}`}>
                <PrinterOutlined />
            </div>
        </div>
    )
}

export default ContentBody;