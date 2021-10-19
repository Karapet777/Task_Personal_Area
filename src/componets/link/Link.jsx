import React from 'react'
import { Link as RouterLink } from "react-router-dom";

const Link = ({title,to,}) => {
    return (
        <div>
            <RouterLink to={to} className='links'>
                {title}
            </RouterLink>
        </div>
    )
}

export default Link