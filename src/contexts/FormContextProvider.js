import React, { useContext, useState } from 'react'
import FormContext from './FormContext'

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
        addOns: []
    }
}

const FormContextProvider = (props) => {
    const [formDetails, setFormDetails] = useState(InitialState);
    const [currentStep, setCurrentStep] = useState(3);

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

    const onStepThreeChange = (action, data) => {
        if (action === "ADD") {
            setFormDetails(prev => ({
                ...prev,
                3: {
                    addOns: prev[3].addOns.push(data)
                }
            }));
        } else {
            setFormDetails(prev => ({
                ...prev,
                3: {
                    addOns: prev[3].addOns.filter(item => item.id !== data.id)
                }
            }));
        }
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