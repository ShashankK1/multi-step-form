import React from 'react'
import './SelectPlan.css';
import PlanCards from '../PlanCards/PlanCards';

const Plans = [
    {
        type: "Arcade",
        monthPrice: 9,
        yearPrice: 105,
        url: "icon-arcade.svg"
    },
    {
        type: "Advanced",
        monthPrice: 10,
        yearPrice: 115,
        url: "icon-advanced.svg"
    },
    {
        type: "Pro",
        monthPrice: 11,
        yearPrice: 125,
        url: "icon-pro.svg"
    }
];

const SelectPlan = () => {
    return (
        <div className="select-plans">
            <div className="plans">
                {
                    Plans.map((item, idx) => {
                        return <PlanCards key={idx} cycle={"MONTHLY"} {...item} />
                    })
                }
            </div>
            <div className="billing-cycle"></div>
        </div>
    )
}

export default SelectPlan