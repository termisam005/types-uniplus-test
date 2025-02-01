import React from 'react';

const RecordTop = ({  }) => {

    return (
        <div className='record_top'>
            <ul className='record_menu'>
                <li>
                    <a href="#!" className='on'>통계</a>
                </li>
                <li>
                    <a href="#!">반복 정체</a>
                </li>
                <li>
                    <a href="#!">Default</a>
                </li>
            </ul>
            <section className='calendar_wrap'>
                <span className='icon_calen24'></span>
                <div className='calen_date'>
                    <span>2023/01/01</span>
                </div>
            </section>
        </div>
    );
};

export default RecordTop;