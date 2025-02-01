import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const FileUploadType1 = ({wrapClass}) => {
    return (
        <div className={wrapClass}>
            <div className="bg_grey06 dflx_ac_jcent h-100">
                <label htmlFor="fileUpload" className="btn_file">
                    <ImgComponent src={"icon_upload_file_24.svg"} alt="파일 업로드" />
                </label>
                <div className="m-t-5">
                    <InputComponent id='fileUpload' className={'hidden_file'} type={'file'} hidden />
                    <div className="fs_12 file_realname">파일 업로드</div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadType1;
