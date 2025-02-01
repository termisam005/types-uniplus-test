import React from 'react';


const TabledlComponent = ({ dlClass, title, ddClass, ddText}) => {

    return (
        <dl className={dlClass}>
            <dt>{title}</dt>
            <dd className={ddClass}>{ddText}</dd>
        </dl>
    );
};

export default TabledlComponent;