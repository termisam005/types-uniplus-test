import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import CheckTextComponentOpen from '../common/CheckTextComponentOpen';



const TreeCheckComponentOpen = ({ children, accordClass, treeTopClass, checkClass, txt }) => {

    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div onClick={toggleAccord} className={accordClass}>
            <div className={treeTopClass}>
                <button className={'accordion_toggle h12 on'}>
                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_sky_12.svg'} />
                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_sky_12.svg'} />
                </button>
                <CheckTextComponentOpen checkClass={checkClass} text={txt}>
                    <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                    <ImgComponent className={'img_selected w20'} src={'checkbox_checked_20.svg'} />
                </CheckTextComponentOpen>
            </div>
            <div className={accordion? 'tree_contents p-b-4 show': 'tree_contents p-b-4'}>
                {children}                                         
            </div>
        </div>
    );
};

export default TreeCheckComponentOpen;
