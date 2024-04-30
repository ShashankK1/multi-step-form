import React from 'react'
import "./ServiceCard.css";
const ServiceCard = ({ checked, service, text, monthCost, yearCost, interval, onClick }) => {
    return (
        <div onClick={onClick} className="service-card" style={{ outline: (checked) ? '1px solid blue' : '', backgroundColor: (checked) ? 'rgba(0,0,0,0.1)' : '', cursor: 'pointer' }}>
            <div className="left">
                <input readOnly checked={checked} type='checkbox' style={{ accentColor: 'purple' }} />
                <div className="service-text">
                    <span className="service">{service}</span>
                    <span className="text">{text}</span>
                </div>
            </div>
            <div className="cost">
                {
                    interval === "MONTHLY" ?
                        <span className="interval-cost">${monthCost}/mo</span> :
                        <span className="interval-cost">${yearCost}/yr</span>
                }
            </div>
        </div>
    )
}

export default ServiceCard