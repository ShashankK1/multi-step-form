import React from 'react'
import "./ServiceCard.css";
const ServiceCard = ({ checked, service, text, monthCost, yearCost, interval, onClick }) => {
    return (
        <div onClick={onClick} className="service-card" style={{ outline: (checked) ? '2px solid hsl(243, 100%, 62%)' : '', backgroundColor: (checked) ? 'hsl(217, 100%, 97%)' : '', cursor: 'pointer' }}>
            <div className="left">
                <input readOnly checked={checked} type='checkbox' style={{ accentColor: 'hsl(243, 100%, 62%)' }} />
                <div className="service-text">
                    <span className="service">{service}</span>
                    <span className="text">{text}</span>
                </div>
            </div>
            <div className="cost">
                {
                    interval === "MONTHLY" ?
                        <span className="interval-cost">+${monthCost}/mo</span> :
                        <span className="interval-cost">+${yearCost}/yr</span>
                }
            </div>
        </div>
    )
}

export default ServiceCard