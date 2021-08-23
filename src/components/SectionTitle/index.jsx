import React from 'react'
import style from './style.module.css'


const SectionTitle = (props) => {
    return (
        <div className={style.container}>
            { props.title}
        </div>
    )
}

export default SectionTitle