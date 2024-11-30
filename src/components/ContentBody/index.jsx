import React from 'react'
import style from './style.module.css'
import CardWrapper from '../CardWrapper'
import { Row, Col, Divider, Badge, Avatar, Space, Tag, Card } from 'antd'
import Icon from "@ant-design/icons"
import TableContent from '../TableContent'
import { GithubOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, SkypeOutlined } from '@ant-design/icons'
import SectionTitle from '../SectionTitle'
import ProgressContent from '../ProgressContent'
import { colorSecondary, colorTextSecondary } from '../../vars.module.css'
import TimeLine from '../TimeLine'
import { imageUrlData, tableData, objectiveData, timeLineData, phoneNumberData, emailData, gitHubLinkData, linkedInLinkData, skypeLinkData, languageSkills, toolSkills, beginnerSkills, petProjects } from '../../data'
import { iconMap } from "../../iconMap.js"
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import PetProjectContent from '../PetProjectContent'





const styleColorIcon = { color: colorTextSecondary, backgroundColor: colorSecondary }

const ContentBody = () => {
    const getTechComponents = (skills) => {
        return skills.map(element => {
            return (<Tag className={style.techTag} icon={<Icon component={iconMap[element]} />} color={colorSecondary}>{element}</Tag>)
        })
    }


    return (
        <div className={style.container}>

            {/* intro section÷ */}

            <CardWrapper>
                <Badge.Ribbon className={style.badgeContainer} text="Hello & Welcome">


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


            {/* Skill section÷ */}

            <SectionTitle title="SKILL" />

            <CardWrapper>
                <Row>
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


            {/* Education and work */}

            <SectionTitle title="WORK EXPERIENCE" />

            <CardWrapper>
                <TimeLine color={colorSecondary} data={timeLineData} />
            </CardWrapper>

            {/* PET Project  */}
            <SectionTitle title="PET PROJECTS" />

            <CardWrapper>
                <PetProjectContent data={petProjects}/>
            </CardWrapper>


            <BackTop className={style.backToTop}>
                <VerticalAlignTopOutlined />
            </BackTop>
        </div>
    )
}

export default ContentBody;