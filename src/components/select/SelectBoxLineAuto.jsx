import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const SelectBoxLineAuto = ({ wrapClass, placeholder, disabled, value }) => {

    const [selbox, setSelbox] = useState(true);
    const handleFocus = () => {
        setSelbox(!selbox);
    }
    const closeBox = () => {
        setSelbox(false);
    }

    const [currentValue, setCurrentValue] = useState('');
    const onChangeSelectValue = (e) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    };
    const onChangeValue = (e) =>{
        setCurrentValue(e.target.value);
    }

    return (
        <section className={wrapClass}>
            <div onClick={closeBox} className={selbox? 'box_bg on':'box_bg'}></div>
            <div onFocus={handleFocus} className={selbox? "selectbox w200 line h28 gap_8 on" : "selectbox w200 line h28 gap_8"}>
                <input type="text" className="selectbox_text" defaultValue={value} onChange={onChangeValue} placeholder={placeholder} disabled={disabled} />
                <ImgComponent className="op06 w16 selectbox_arrow" src={'arrow_down_fff_16.svg'} />
                <ul className="selectbox_options scroll">
                    <li onClick={onChangeSelectValue} className="option selected">label 1</li>
                    <li onClick={onChangeSelectValue} className="option">label 2</li>
                    <li onClick={onChangeSelectValue} className="option">label 3</li>
                    <li onClick={onChangeSelectValue} className="option">label 4</li>
                    <li onClick={onChangeSelectValue} className="option">label 5</li>
                </ul>
            </div>
        </section>
    );
};

export default SelectBoxLineAuto;
