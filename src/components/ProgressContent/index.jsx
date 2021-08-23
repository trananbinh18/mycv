import React from 'react'
import style from './style.module.css'
import { Progress, Row, Col } from 'antd';

const ProgressContent = (props) => {
    //Object type
    const data = props.data;

    const getComponentsProgess = () => {
        let components = []

        for (const property in data) {
            components.push(
                <div className={style.element}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                            <span>
                                {property}
                            </span>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={{span: 17, offset: 1}} xl={{span: 17, offset: 1}}>
                            <Progress showInfo={false} percent={data[property]} strokeColor={props.color} />

                        </Col>

                    </Row>

                </div>
            )
        }

        return components

    }

    return (
        <div className={style.container}>
            {getComponentsProgess()}
        </div>
    )


}

export default ProgressContent;