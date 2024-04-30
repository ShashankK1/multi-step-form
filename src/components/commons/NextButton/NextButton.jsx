import React from 'react'
import './NextButton.css'
const NextButton = ({ children, ...rest }) => {
    return (
        <button className='next-button' {...rest}>{children}</button>
    )
}

export default NextButton