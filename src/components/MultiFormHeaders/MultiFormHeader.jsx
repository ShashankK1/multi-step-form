import React from 'react'
import './MultiFormHeader.css';
const MultiFormHeader = ({ header, text }) => {
    return (
        <div className="multi-form-header">
            <div className="header">
                {header}
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    )
}

export default MultiFormHeader