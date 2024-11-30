import React from 'react'
import { Timeline, Button, Tooltip, Tag } from 'antd';
import { CheckSquareFilled, ReadFilled, HomeFilled, ProjectFilled } from '@ant-design/icons';
import Icon from "@ant-design/icons"
import style from './style.module.css';
import { ReactComponent as PeopleIcon } from "../../svg/people.svg";
import {iconMap} from "../../iconMap.js"

const TimeLine = (props) => {
    const data = props.data
    const color = props.color

    const getComponentsTimelineItem = () => {
        let components = []

        for (const property in data) {
            let iconStyle = { fontSize: "25px", padding: "10px", color: color }
            let icon = (<CheckSquareFilled style={iconStyle} />)
            let tech = []

            switch (data[property].type) {
                case "Work":
                    icon = (<HomeFilled style={iconStyle} />)
                    break;
                case "Project":
                    icon = (<ProjectFilled style={iconStyle} />)
                    tech = data[property].tech.sort((a, b) => a > b).map(element => {
                        return (<Tag className={style.techTag} icon={<Icon component={iconMap[element]} />} color={color}>{element}</Tag>)
                    })
                    break;
                default:
                    break;

            }


            components.push(
                <Tooltip title={`${data[property].time} ${property}`} >
                    <Timeline.Item dot={icon} >
                        {(data[property].type == "Work") ? 
                        (
                            <div className={style.contentHeaderWork}>
                                <span className={style.time}>{data[property].time}</span>
                                <span className={style.title}>{property}</span>
                            </div>
                        )
                        : 
                        (<div className={style.contentWrapper}>
                            <div className={style.contentHeader}>
                                {data[property].teamSize ? <Tooltip title="Team size"><span className={style.peopleIcon}><Icon component={PeopleIcon} /> <span>{data[property].teamSize}</span></span></Tooltip> : ""}
                                <span className={style.time}>{data[property].time}</span>
                                <div className={style.title}>{property}</div>
                            </div>
                            <ul className={style.contentList}>
                                {data[property].content.map(element => (
                                    <li>
                                        {element}
                                    </li>
                                ))}
                            </ul>
                            <div className={style.tagWrapper}>
                                {tech}
                            </div>
                        </div>)
                        } 
                    </Timeline.Item>
                </Tooltip>
            )
        }

        return components
    }


    return (
        <Timeline reverse pending="To be continute..." mode="left">
            {getComponentsTimelineItem()}
        </Timeline>
    )
}

export default TimeLine