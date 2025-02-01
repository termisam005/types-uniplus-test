import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';



const IndicatorTabOnComponent = ({ IndClass, topClass, children }) => {

    const [toggleInd, setToggleInd] = useState(true);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className={topClass}>
                <ul className="record_menu hauto">
                    <li>
                        <a href="#!" className="on">Tab1</a>
                    </li>
                    <li>
                        <a href="#!">Tab2</a>
                    </li>
                    <li>
                        <a href="#!">Tab3</a>
                    </li>
                </ul>
                <p className={toggleInd? 'arr_up':'arr_up down'} onClick={clickInd}>
                  <ImgComponent className={'w20'} src={'arrow_up_sky_20.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts':'indi_conts del'}>
                {children}
            </div>
        </article>
    );
};

export default IndicatorTabOnComponent;