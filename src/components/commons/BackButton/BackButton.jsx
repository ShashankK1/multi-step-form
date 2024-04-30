import React from 'react'
import './BackButton.css'
const BackButton = ({ children, ...rest }) => {
    return (
        <button className='back-button' {...rest}>{children}</button>
    )
}

export default BackButton;