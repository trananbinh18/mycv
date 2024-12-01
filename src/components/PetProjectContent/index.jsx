import React from 'react'
import { Row, Col, Card, Divider } from 'antd'
import Icon from "@ant-design/icons"
import { iconMap } from "../../iconMap.js"
import style from './style.module.css';


const PetProjectContent = (props) => {

    const getPetProjects = (data) => {
        let components = [];
        for (const property in data) {
            components.push((
                <Col className={style.columnWrapper} xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card style={{margin: 7}} title={property}>
                        {data[property].projects.map(project => (
                            <div>
                                <a href={project.link} target='_blank'>
                                    <span class={style.header}>
                                        <Icon className={style.icon} component={iconMap[project.name]} />
                                        <span><h3>{project.name}</h3></span>
                                        <Icon className={style.iconLink} component={iconMap["Link"]} />
                                    </span>
                                </a>
                                <div>
                                    <ul>
                                        {project.content.map(element => (
                                            <li>
                                                {element}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Card>
                </Col>
            ))

        }
        return components;
    }


    return (
        <Row>
            <h4 style={{fontStyle: "italic", padding: 7}}>My favorite open-source and personal projects running on my self-hosted home lab, built to share with friends and family for automation and smart solutions.</h4>
            <Divider/>
            {getPetProjects(props.data)}
        </Row>
    )
}

export default PetProjectContent;