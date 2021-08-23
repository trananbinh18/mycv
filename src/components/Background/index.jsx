import React from 'react'
import style from './style.module.css'
import { Row, Col } from 'antd';


const Background = (props) => {
    return (
        <div className={style.container}>
            <div className={style.containerTop}>
                <Row justify="left">
                    <Col xs={{span:20, offset: 2}} sm={{span:20, offset: 2}} md={{span:20, offset: 2}} lg={{span:8, offset: 4}} xl={{span:8, offset: 4}}>
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