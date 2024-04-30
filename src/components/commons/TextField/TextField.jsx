import React from 'react';
import './TextField.css';

const TextField = ({ label, error = "", ...rest }) => {
    return (
        <div className="input-group">
            <div className='top-text'>
                <label htmlFor="name">{label}</label>
                <span className="error-text">{error}</span>
            </div>
            <input {...rest} type="text" className="form-control" style={{ borderColor: (error.length > 0) ? 'red' : '', ...rest?.style }} />
        </div>
    )
}

export default TextField