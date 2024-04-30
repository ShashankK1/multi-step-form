import React, { useState } from 'react'
import './SelectPlan.css';
import PlanCards from '../PlanCards/PlanCards';
import NextButton from '../commons/NextButton/NextButton';
import BackButton from '../commons/BackButton/BackButton';
import { useForm } from '../../contexts/FormContextProvider';

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
    const { formDetails, onStepTwoChange, setCurrentStep } = useForm();

    const [form, setForm] = useState({ ...formDetails[2] });

    const onCycleChange = (e) => {
        setForm(prev => ({ ...prev, interval: (e.target.checked) ? "YEARLY" : "MONTHLY" }))
    }

    const handleNext = () => {
        onStepTwoChange(form);
    }

    return (
        <div className="select-plans">
            <div className="plans">
                {
                    Plans.map((item, idx) => {
                        return <PlanCards selected={item.type === form.type} cycle={form.interval} onClick={() => { setForm(prev => ({ ...prev, ...item })) }} key={idx} {...item} />
                    })
                }
            </div>
            <div className="billing-cycle">
                <span>Monthly</span>
                <label className="switch">
                    <input checked={form.interval === "YEARLY"} type="checkbox" onChange={onCycleChange} />
                    <span className="slider round"></span>
                </label>
                <span>Yearly</span>
            </div>
            <div className="action-btns">
                <BackButton onClick={() => { setCurrentStep(1) }}>Go Back</BackButton>
                <NextButton onClick={handleNext}>Next Step</NextButton>
            </div>
        </div>
    )
}

export default SelectPlan