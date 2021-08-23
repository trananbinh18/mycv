import React from 'react'
import style from './style.module.css'
import CardWrapper from '../CardWrapper'
import { Progress, Row, Col, Divider, Badge, Avatar, Space, Button } from 'antd'
import TableContent from '../TableContent'
import { GithubOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined, SkypeOutlined } from '@ant-design/icons'
import SectionTitle from '../SectionTitle'
import ProgressContent from '../ProgressContent'
import { colorSecondary, colorTextSecondary } from '../../vars.module.css'
import TimeLine from '../TimeLine'
import { imageUrlData, tableData, progressData, objectiveData, timeLineData, phoneNumberData, emailData, gitHubLinkData, linkedInLinkData, skypeLinkData } from '../../data'
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';





const styleColorIcon = { color: colorTextSecondary, backgroundColor: colorSecondary }

const ContentBody = () => {
    return (
        <div className={style.container}>

            {/* intro section÷ */}

            <CardWrapper>
                <Badge.Ribbon className={style.badgeContainer} text="Hello & Welcome">


                    <Row>
                        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                            <img className={style.avatar} src={imageUrlData} />
                        </Col>

                        <Col xs={24} sm={{span:24, offset: 0}} md={{span:24, offset: 0}} lg={{span:12, offset: 2}} xl={{span:12, offset: 2}} >
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
                        {objectiveData}
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={{span: 11, offset: 2}} xl={{span: 11, offset: 2}}>
                        <ProgressContent color={colorSecondary} data={progressData} />
                    </Col>

                </Row>

            </CardWrapper>


            {/* Education and work */}

            <SectionTitle title="MY TIME LINE" />

            <CardWrapper>

                <TimeLine color={colorSecondary} data={timeLineData} />

            </CardWrapper>


            <BackTop className={style.backToTop}>
                <VerticalAlignTopOutlined />
            </BackTop>
        </div>
    )
}

export default ContentBody;