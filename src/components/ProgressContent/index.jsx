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
                        <Col span={5}>
                            <span>
                                {property}
                            </span>
                        </Col>

                        <Col offset={1} span={17}>
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