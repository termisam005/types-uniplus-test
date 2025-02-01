import React from 'react';
import GnbComponent from '../common/GnbComponent';


const Gnb = () => {

    return (
        <nav className='gnb'>
            <ul className='col_gap30'>
                <GnbComponent title={'상황관리'} path={'/main'} />
                <GnbComponent title={'상황관리이력'} path={'/record'} />
                <GnbComponent title={'신호최적화'} path={'/signal'} />
                <GnbComponent title={'사용자관리'} path={'/users'} />
                <GnbComponent title={'Error'} path={'/error'} />
                <GnbComponent title={'Login'} path={'/login'} />
                <GnbComponent title={'Components'} path={'/accordionlist'} />
            </ul>
        </nav>
    );
};

export default Gnb;