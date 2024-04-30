import React, { useState } from 'react'
import "./AddOns.css";
import ServiceCard from '../ServiceCard/ServiceCard';
import BackButton from '../commons/BackButton/BackButton';
import NextButton from '../commons/NextButton/NextButton';
import { useForm } from '../../contexts/FormContextProvider';


const AddOns = () => {
    const { setCurrentStep, onStepThreeChange, formDetails } = useForm();
    const [form, setForm] = useState(formDetails[3].addOns);
    const handleSelect = (index) => {
        setForm(prev => prev.map((item, idx) => (idx === index) ? { ...item, checked: !item.checked } : item))
    }
    const handleNext = () => {
        onStepThreeChange(form);
    }
    return (
        <div className="add-ons">
            <div className="service-list">
                {
                    form.map((item, idx) => {
                        return <ServiceCard interval={formDetails[2].interval} onClick={() => { handleSelect(idx) }} key={idx} {...item} />
                    })
                }
            </div>
            <div className="action-btns">
                <BackButton onClick={() => { setCurrentStep(2) }}>Go Back</BackButton>
                <NextButton onClick={handleNext}>Next Step</NextButton>
            </div>
        </div>
    )
}

export default AddOns