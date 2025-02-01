import React from 'react';

interface Props {
	checkClass?: string;
    type?: string;
    name?: string;
    defaultChecked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
	checkId?: string;
	labelClass?: string;
    txt?: string;
}


const CheckComponent = ({ checkClass, type, name, defaultChecked, onChange, disabled, checkId, labelClass, txt }:Props) => {

    return (
        <div className={checkClass}>
            <input type={type} id={checkId} name={name} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} hidden /> 
            <label htmlFor={checkId} className={labelClass}>{txt}</label>
        </div>
    );
};

export default CheckComponent;
