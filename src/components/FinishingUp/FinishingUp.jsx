import React from 'react';
import './FinishingUp.css';
import { useForm } from '../../contexts/FormContextProvider';
import BackButton from '../commons/BackButton/BackButton';

const FinishingUp = () => {
    const { formDetails, setCurrentStep } = useForm();
    const total = () => {
        let sum = 0;
        let interval = formDetails[2].interval;
        if (interval === "YEARLY") {
            sum += formDetails[2].yearPrice;
            for (const item of formDetails[3].addOns) {
                if (item.checked) {
                    sum += item.yearCost;
                }
            }
            return `$${sum}/yr`;
        } else {
            sum += formDetails[2].monthPrice;
            for (const item of formDetails[3].addOns) {
                if (item.checked) {
                    sum += item.monthCost;
                }
            }
            return `$${sum}/mo`;
        }
    }
    return (
        <div className="finishing-up">
            <div className="colored-set">
                <div className="info-set">
                    <div className="container-set">
                        <span className="type">
                            {formDetails[2].type}{" (" + formDetails[2].interval + ")"}
                        </span>
                        <span onClick={() => { setCurrentStep(2) }} className="change" style={{ textDecoration: 'underline', cursor: 'pointer' }}>Change</span>
                    </div>
                    <div className="amount">{(formDetails[2].interval === "YEARLY") ? `$${formDetails[2].yearPrice}/yr` : `$${formDetails[2].monthPrice}/mo`}</div>
                </div>
                <hr style={{ width: '100%' }} />
                {
                    formDetails[3].addOns.map((item, idx) => {
                        return item.checked ? <div className="service-price">
                            <span className="text-set">{item.service}</span>
                            <span className="text-set">{(formDetails[2].interval === 'YEARLY') ? `$${item.yearCost}/yr` : `$${item.monthCost}/mo`}</span>
                        </div> : <></>
                    })
                }
            </div>
            <div className="non-colored">
                <div className="service-price">
                    <span className="text-set">{"Total (per year)"}</span>
                    <span className="text-set">{total()}</span>
                </div>
            </div>
            <div className="action-btns">
                <BackButton onClick={() => { setCurrentStep(3) }}>Go back</BackButton>
                <button
                    onClick={() => { setCurrentStep(5) }}
                    style={{ border: '1px solid purple', backgroundColor: 'purple', color: 'white', padding: '6px 16px', fontFamily: 'Medium', fontSize: 'medium', borderRadius: '8px' }}
                >Confirm</button>
            </div>
        </div>
    )
}

export default FinishingUp