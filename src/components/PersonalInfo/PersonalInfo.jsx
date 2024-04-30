import React, { useState } from 'react';
import { useForm } from '../../contexts/FormContextProvider';

import './PersonalInfo.css';
import TextField from '../commons/TextField/TextField';
import NextButton from '../commons/NextButton/NextButton';
import BackButton from '../commons/BackButton/BackButton';
// import { TextField } from '@mui/material';

const InitialState = { name: "", email: "", phone: "" };

const PersonalInfo = () => {
    const { formDetails, onStepOneChange } = useForm();
    const [form, setForm] = useState({ name: formDetails[1].name, email: formDetails[1].email, phone: formDetails[1].phone });
    const [formErrors, setFormErrors] = useState(InitialState)

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleValidation = () => {
        if (form.name.length === 0) {
            setFormErrors(prev => ({ ...InitialState, name: "Required field" }));
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (form.email.length === 0) {
            setFormErrors(prev => ({ ...InitialState, email: "Required field" }));
            return false;
        }
        if (!emailRegex.test(form.email)) {
            setFormErrors(prev => ({ ...InitialState, email: "Invalid email" }));
            return false;
        }
        if (form.phone.length === 0) {
            setFormErrors(prev => ({ ...InitialState, phone: "Required field" }));
            return false;
        }
        if (!(form.phone.length >= 10 && form.phone.length <= 12)) {
            setFormErrors(prev => ({ ...InitialState, phone: "Invalid phone number" }));
            return false;
        }
        return true;
    }

    const handleClick = () => {
        if (handleValidation()) {
            onStepOneChange(form);
        }
    }

    return (
        <div className="personal-info">
            <TextField error={formErrors.name} value={form.name} onChange={handleChange} style={{ width: '90%' }} label={"Name"} name={'name'} placeholder={'e.g. Sam Grid'} />
            <TextField error={formErrors.email} value={form.email} onChange={handleChange} style={{ width: '90%' }} label={"Email"} name={'email'} placeholder={'e.g. sam@gmail.com'} />
            <TextField error={formErrors.phone} value={form.phone} onChange={handleChange} style={{ width: '90%' }} label={"Phone number"} name={'phone'} placeholder={'e.g. 9999999999'} />
            <div className='btn-container'>
                <NextButton onClick={handleClick}>Next Step</NextButton>
            </div>
        </div>
    )
}

export default PersonalInfo