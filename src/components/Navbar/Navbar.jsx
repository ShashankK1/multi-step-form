import React from 'react';
import './Navbar.css';
import NavbarItems from '../NavbarItems/NavbarItems';
import { useForm } from '../../contexts/FormContextProvider';

const NavbarSteps = [
    {
        id: 1,
        top: "STEP 1",
        bottom: "YOUR INFO"
    },
    {
        id: 2,
        top: "STEP 2",
        bottom: "SELECT PLAN"
    },
    {
        id: 3,
        top: "STEP 3",
        bottom: "ADD-ONS"
    },
    {
        id: 4,
        top: "STEP 4",
        bottom: "SUMMARY"
    },

]

const Navbar = () => {
    const { currentStep } = useForm();
    return (
        <div className='navbar'>
            <div className="container">
                <div className='steps'>
                    {
                        NavbarSteps.map(item => {
                            return <NavbarItems selected={currentStep === item.id} key={item.id} {...item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar