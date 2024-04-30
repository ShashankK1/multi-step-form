import React from 'react';
import "./MultiForm.css";
import MultiFormHeader from '../MultiFormHeaders/MultiFormHeader';
import { useForm } from '../../contexts/FormContextProvider';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SelectPlan from '../SelectPlan/SelectPlan';
import AddOns from '../AddOns/AddOns';
import FinishingUp from '../FinishingUp/FinishingUp';

const MultiFormHeaders = {
    1: {
        header: "Personal info",
        text: "Please provide your name, email address and phone number"
    },
    2: {
        header: "Select your plan",
        text: "You have option for monthly or yearly billings"
    },
    3: {
        header: "Pick add-ons",
        text: "Add-ons help enhance your gaming experience"
    },
    4: {
        header: "Finishing up",
        text: "Double-check everything looks OK before confirming"
    }
}

const MultiForm = () => {
    const { currentStep } = useForm();

    const ComponentToShow = () => {
        switch (currentStep) {
            case 1: return <PersonalInfo />;
            case 2: return <SelectPlan />;
            case 3: return <AddOns />;
            case 4: return <FinishingUp />
            default: return <></>;
        }
    }

    return (
        <div className="multi-form">
            <MultiFormHeader {...MultiFormHeaders[currentStep]} />
            <ComponentToShow />
        </div>
    )
}

export default MultiForm