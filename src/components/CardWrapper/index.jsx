import React from 'react'
import style from './style.module.css'
import { Row, Col } from 'antd'

const CardWrapper = ({ props, children }) => {
    return (
        <Row justify="center">
            <Col className={style.rowContainer} xs={22} sm={22} md={22} lg={16} xl={16}>
                <div className={style.container}>
                    {children}
                </div>
            </Col>
        </Row>
    )
}

export default CardWrapper