import React from 'react'
import './CardPost.scss'

const CardPost = ({id, title, author, deletItem}) => {
    return (
        <div className='CardPost-container'>
            <p>{id}</p>
            <p>{title}</p>
            <p>{author}</p>
            <button onClick={deletItem}>delete</button>
        </div>
    )
}

export default CardPost
