import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const FileUploadType2 = ({wrapClass, loading}) => {
    return (
        <div className={wrapClass}>
            <div className='filename_box'>
                <label htmlFor='fileUpload2' className='btn_file btn_secondary btn_xs'>파일 선택</label>
                <div className='flex1'>
                    <InputComponent id='fileUpload2' className={'hidden_file'} type={'file'} hidden />
                    
                    {
                        /* 로딩여부 props */
                        loading !== true
                        ? <div className='m-t-4 fs_12 file_realname '>선택된 파일 없음</div>
                        : <ImgComponent src={'ring_small.png'} className={'spin_animation w18 m-l-12'} />
                    }
                </div>
            </div>
        </div>
    );
};

export default FileUploadType2;
