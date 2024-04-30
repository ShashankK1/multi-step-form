import React from 'react'
import './SelectPlan.css';
import PlanCards from '../PlanCards/PlanCards';
import NextButton from '../commons/NextButton/NextButton';
import BackButton from '../commons/BackButton/BackButton';

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
            <div className="billing-cycle">
                <span>Monthly</span>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Yearly</span>
            </div>
            <div className="action-btns">
                <BackButton>Go Back</BackButton>
                <NextButton>Next Step</NextButton>
            </div>
        </div>
    )
}

export default SelectPlan