import React, { useContext, useState } from 'react'
import FormContext from './FormContext'

const AllAddOns = [
    {
        checked: false,
        service: "Online service",
        text: "Access to multiplayer games",
        monthCost: 1,
        yearCost: 11
    },
    {
        checked: false,
        service: "Larger storage",
        text: "Extra 1TB of cloud save",
        monthCost: 2,
        yearCost: 20
    },
    {
        checked: false,
        service: "Customizable profile",
        text: "Custom theme on your profile",
        monthCost: 2,
        yearCost: 18
    }
]

const InitialState = {
    1: {
        name: "",
        email: "",
        phone: ""
    },
    2: {
        type: "Arcade",
        monthPrice: 9,
        yearPrice: 105,
        url: "icon-arcade.svg",
        interval: "YEARLY"
    },
    3: {
        addOns: AllAddOns
    }
}

const FormContextProvider = (props) => {
    const [formDetails, setFormDetails] = useState(InitialState);
    const [currentStep, setCurrentStep] = useState(1);
    console.log(formDetails)
    const onStepOneChange = (data) => {
        setFormDetails(prev => ({
            ...prev,
            1: { ...prev[1], ...data }
        }));
        setCurrentStep(2);
    }

    const onStepTwoChange = (data) => {
        setFormDetails(prev => ({
            ...prev,
            2: { ...data }
        }));
        setCurrentStep(3);
    }

    const onStepThreeChange = (data) => {
        setFormDetails(prev => ({
            ...prev,
            3: { addOns: data }
        }));
        setCurrentStep(4);
    }

    return (
        <FormContext.Provider value={{ formDetails, currentStep, onStepOneChange, onStepTwoChange, onStepThreeChange, setCurrentStep }}>
            {props.children}
        </FormContext.Provider>
    )
};

export const useForm = () => useContext(FormContext);

export default FormContextProvider