import React from 'react';
import { useState } from 'react';
import ImgComponent from './ImgComponent';


const CheckTextComponentOpen = ({ children, checkClass, text }) => {

    const [checkBox, setCheckBox] = useState(true);
    const clickCheck = () => {
        setCheckBox(!checkBox);
    }

    return (
        <div onClick={clickCheck} className={checkClass}>
            <p className={checkBox ? 'on' : ''}>
                {children}
            </p>
            <span className='text fc_white'>
                {text}
            </span>
        </div>
    );
};

export default CheckTextComponentOpen;
