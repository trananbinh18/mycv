import React from 'react'
import { Timeline, Button, Tooltip, Tag } from 'antd';
import { CheckSquareFilled, ReadFilled, HomeFilled, ProjectFilled } from '@ant-design/icons';
import style from './style.module.css';

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
                case "Education":
                    icon = (<ReadFilled style={iconStyle} />)

                    break;
                case "Work":
                    icon = (<HomeFilled style={iconStyle} />)
                    break;
                case "Project":
                    icon = (<ProjectFilled style={iconStyle} />)
                    tech = data[property].tech.map(element => {
                        return (<Tag color={color}>{element}</Tag>)
                    })

                    break;
                default:
                    break;

            }

            components.push(
                <Tooltip title={`${data[property].time} ${property}`} >
                    <Timeline.Item dot={icon} >
                        <div className={style.contentWrapper}>
                            <div className={style.contentHeader}>
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
                        </div>
                    </Timeline.Item>
                </Tooltip>
            )
        }

        return components
    }


    return (
        <Timeline pending="To be continute..." mode="left">
            {getComponentsTimelineItem()}
        </Timeline>
    )
}

export default TimeLine