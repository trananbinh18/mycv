import React from 'react'
import style from './style.module.css'
import { Row, Col } from 'antd';


const Background = (props) => {
    return (
        <div className={style.container}>
            <div className={style.containerTop}>
                <Row justify="left">
                    <Col offset={4} span={8}>
                        <div className={style.wrapper}>
                        <div className={style.myName}>
                            Binh Tran
                        </div>
                        <span className={style.jobTitle}>
                            Software Engineer
                        </span>
                        </div>

                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        </div>
    )
}

export default Background