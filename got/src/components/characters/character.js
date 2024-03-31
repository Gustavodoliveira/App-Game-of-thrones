
import Image from 'next/image'
import React from 'react'
import style from "./character.module.css"

const Character = ({ person }) => {
    return (
        <div className={style.character_container}>
            <div style={style.character_image}>
                <Image src={person.imageUrl} width={200} height={200} alt={person.fullName} />
            </div>
            <div className={style.character_name}>
                <h3>{person.firstName} {person.lastName}</h3>
            </div>
            <div className={style.character_title}>
                <h3>Title: <span>{person.title}</span></h3>
            </div>
        </div>
    )
}

export default Character