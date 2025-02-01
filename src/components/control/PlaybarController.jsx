import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';

const PlaybarController = ({addedClass}) => {
    return (
        <div className={addedClass}>        
            <ButtonWithComponent type={'button'} className={'h20'}>
                <ImgComponent src={'play_sky_20.svg'} />
            </ButtonWithComponent>
            <ButtonWithComponent type={'button'} className={'h20'}>
                <ImgComponent src={'pause_fff_20.svg'} />
            </ButtonWithComponent>                                                
            <ButtonWithComponent type={'button'} className={'h20'}>
                <ImgComponent src={'reset_fff_20.svg'} />
            </ButtonWithComponent>
        </div>
    );
};

export default PlaybarController;
