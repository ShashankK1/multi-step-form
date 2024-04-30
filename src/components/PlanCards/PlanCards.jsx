import React from 'react'
import './PlanCards.css';

const PlanCards = ({ type, monthPrice, yearPrice, url, cycle = "MONTHLY" }) => {
    return (
        <div className="plan-card">
            <div>
                <img alt='icon' className='img' src={url} />
            </div>
            <div className="plan-info">
                <span className='type'>{type}</span>
                {
                    cycle === "MONTHLY" ?
                        <>
                            <span className='month'>${monthPrice}/mo</span>
                        </> :
                        <>
                            <span className='year'>${yearPrice}/yr</span>
                            <spa className="free">2 months free</spa>
                        </>
                }
            </div>
        </div>
    )
}

export default PlanCards