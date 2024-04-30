import React from 'react'
import './PlanCards.css';

const PlanCards = ({ type, monthPrice, yearPrice, url, cycle = "MONTHLY", onClick, selected }) => {
    return (
        <div className={"plan-card"} style={{ outline: (selected) ? '2px solid hsl(243, 100%, 62%)' : '', backgroundColor: (selected) ? 'hsl(231, 100%, 99%)' : '' }} onClick={() => { onClick({ type, monthPrice, yearPrice, url, cycle }) }}>
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
                            <span className="free">2 months free</span>
                        </>
                }
            </div>
        </div>
    )
}

export default PlanCards