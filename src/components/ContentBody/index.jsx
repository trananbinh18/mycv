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
import { tableData, progressData, objectiveData, timeLineData, phoneNumberData, emailData, gitHubLinkData, linkedInLinkData } from '../../data'
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';





const styleColorIcon = {color: colorTextSecondary, backgroundColor:colorSecondary}

const ContentBody = () => {
    return (
        <div className={style.container}>

            {/* intro section÷ */}

            <CardWrapper>
                <Badge.Ribbon className={style.badgeContainer} text="Hello & Welcome">


                    <Row>
                        <Col span={10}>
                            <img className={style.avatar} src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t31.18172-8/28061295_1565489043570978_6260977366054360602_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=drlr7z9jXzUAX8IENOU&_nc_ht=scontent.fsgn3-1.fna&oh=f2977f1c1a0cedca3ba4afb2645756db&oe=6147B87C" />

                        </Col>
                        <Col offset={2} span={12}>
                            <div className={style.introduceName}>
                                <span>I'M</span> <span>BINH TRAN</span>
                            </div>
                            <div className={style.jobTitle}>Software Engineer</div>

                            <Divider />

                            <TableContent data={tableData} />

                            <Divider />

                            <div className={style.iconList}>
                                <Space>
                                    <a href="" target="_blank">
                                        <Avatar style={styleColorIcon} shape="square" size="large" icon={<GithubOutlined />} />
                                    </a>

                                    <a href={`tel:${phoneNumberData}`} target="_blank">
                                        <Avatar style={styleColorIcon}  shape="square" size="large" icon={<PhoneOutlined />} />
                                    </a>

                                    <a href={`mailto:${emailData}`} target="_blank">
                                        <Avatar style={styleColorIcon}  shape="square" size="large" icon={<MailOutlined />} />
                                    </a>

                                    <a href={linkedInLinkData} target="_blank">
                                        <Avatar style={styleColorIcon}  shape="square" size="large" icon={<LinkedinOutlined />} />
                                    </a>

                                    <a href={gitHubLinkData} target="_blank">
                                        <Avatar style={styleColorIcon} shape="square" size="large" icon={<SkypeOutlined />} />
                                    </a>
                                </Space>

                            </div>

                        </Col>
                    </Row>


                </Badge.Ribbon>
            </CardWrapper>


            {/* Skill section÷ */}

            <SectionTitle title="SKILL" />

            <CardWrapper>
                <Row>
                    <Col span={11}>
                        {objectiveData}
                    </Col>

                    <Col offset={2} span={11}>
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
                <VerticalAlignTopOutlined/>
            </BackTop>
        </div>
    )
}

export default ContentBody;