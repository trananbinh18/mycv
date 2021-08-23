import React from 'react'
import style from './style.module.css'
import { Row, Col } from 'antd'

const CardWrapper = ({ props, children }) => {
    return (
        <Row justify="center">
            <Col span={16}>
                <div className={style.container}>
                    {children}
                </div>
            </Col>
        </Row>
    )
}

export default CardWrapper