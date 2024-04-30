import React, { useContext, useState } from 'react'
import FormContext from './FormContext'

const InitialState = {
    1: {
        name: "",
        email: "",
        phone: ""
    },
    2: {
        type: null,
        interval: "MONTHLY"
    },
    3: {
        addOns: []
    }
}

const FormContextProvider = (props) => {
    const [formDetails, setFormDetails] = useState(InitialState);
    const [currentStep, setCurrentStep] = useState(1);

    const onStepOneChange = (name, value) => {
        setFormDetails(prev => ({
            ...prev,
            1: {
                ...prev[1],
                [name]: value
            }
        }));
    }

    const onStepTwoChange = (name, value) => {
        setFormDetails(prev => ({
            ...prev,
            2: {
                ...prev[2],
                [name]: value
            }
        }));
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
    }

    return (
        <FormContext.Provider value={{ formDetails, currentStep, onStepOneChange, onStepTwoChange, onStepThreeChange }}>
            {props.children}
        </FormContext.Provider>
    )
};

export const useForm = () => useContext(FormContext);

export default FormContextProvider