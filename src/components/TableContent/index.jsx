import React from "react"
import { Row, Col } from "antd"
import style from "./style.module.css"

const TableContent = (props) => {

    //Object type 
    const data = props.data

    const getComponentsField = () => {
        let components = []

        for (const property in data) {
            components.push(
                <Row key={property} className={style.element} justify="left">
                    <Col span={4}>{property}</Col>
                    <Col offset={2} span={18}>{data[property]}</Col>
                </Row>
            )
        }

        return components
    }


    return (
        <div className={style.container}>
            {getComponentsField()}
        </div>
    )
}

export default TableContent;