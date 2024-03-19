import React from 'react'
import style from './button.module.css'

const Button = ({ Children, Click, Class }) => {
    return (
        <button onClick={Click} className={Class ? Class : style.btn_default}>{Children}</button>
    )
}

export default Button