import React from 'react';
// import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';
import PhotoComponent from '../../components/common/PhotoComponent';

import FileUploadType1 from '../../components/etc/FileUploadType1';
import FileUploadType2 from '../../components/etc/FileUploadType2';
import ImageThumbnailRegistration from '../../components/etc/ImageThumbnailRegistration';
import ImageThumbnailModify from '../../components/etc/ImageThumbnailModify';


const Upload = () => {

    return (
        <div className='guide_back'>
            <div className='guide_wrap'>
            
                <Header>
                    <HeaderLeft />
                    <GnbComponents />
                    <HeaderRight>
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='guide_center width1720'>
                    <article className='guide_top'>
                        <h1>Upload</h1>
                    </article>

                    <article className='Gr_contents'>
                        <div className='comp_top flex_wrap'>
                            <h2>File</h2>
                        </div>
                        <section className='comp_conts dflx_as'>
                            <div className='w120 m-t-60'>
                                <p className='fs_bold'>Box</p>
                                    <p className='fs_12 fc_grey60 m-t-6'>File 1개 이상</p>
                            </div>
                            <div className='dflx gap_40'>
                                <div>
                                    <p className='fs_12 fc_grey60 m-b-24'>Empty</p>
                                    <FileUploadType1 wrapClass='w400 h120'></FileUploadType1>
                                </div>
                                <div>
                                    <p className='fs_12 fc_grey60 m-b-24'>Progress</p>
                                    <div className={'bg_grey06 dflx_ac_jcent w400 h120'}>
                                        <ImgComponent src={'ring_small.png'} className={'spin_animation w18'} />
                                    </div>
                                </div>
                                <div>
                                    <p className='fs_12 fc_grey60 m-b-24'>Set up</p>
                                    <FileUploadType1 wrapClass='w400 h120'></FileUploadType1>
                                    <div className={'filename_box m-t-10'}>
                                        <div className='m-t-4 fs_12 file_realname '>filename.pdf</div>
                                        <ButtonWithComponent className={'m-l-a'}>
                                            <ImgComponent src={'close_line_fff_24.svg'} className={'w16'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <div className={'filename_box m-t-10'}>
                                        <div className='m-t-4 fs_12 file_realname '>filename.pdf</div>
                                        <ButtonWithComponent className={'m-l-a'}>
                                            <ImgComponent src={'close_line_fff_24.svg'} className={'w16'} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </div>                 
                        </section>
                        <div className='comp_conts dflx_ac m-t-80'>
                            <div className='w120'>
                                <p className='fs_bold'>Bar</p>
                                <p className='fs_12 fc_grey60 m-t-6'>File 1개</p>
                            </div>
                            <FileUploadType2 wrapClass='w400 h40' />
                            <FileUploadType2 wrapClass='w400 h40 m-l-40' loading />
                            
                            <div className={'filename_box w400 h40 m-l-40'}>
                                <label htmlFor='fileUpload2' className='btn_file btn_secondary btn_xs'>파일 선택</label>
                                <InputComponent id='fileUpload2' className={'hidden_file'} type={'file'} hidden />
                                <div className='m-t-4 fs_12 file_realname '>filename.pdf</div>
                                <ButtonWithComponent className={'m-l-a'}>
                                    <ImgComponent src={'close_line_fff_24.svg'} className={'w16'} />
                                </ButtonWithComponent>
                            </div>
                        </div>
                    </article>

                    <article className='Gr_contents m-t-120'>
                        <div className='comp_top flex_wrap'>
                            <h2>Image</h2>
                        </div>
                        <section className='comp_conts'>
                            <div className='dflx_as p-20 m-t-20'>
                                <p className='fs_bold w120 m-t-60'>Box</p>
                                <div>
                                    <p className='fs_12 fc_grey60 m-b-20'>Empty</p>
                                    <ImageThumbnailRegistration 
                                        addedClass='bg_grey06 flex_column dflx_ac_jcent w440 h200 relative'
                                        imageID='imageUpload'
                                    >
                                    </ImageThumbnailRegistration>
                                </div>
                                <div className='m-l-60'>
                                    <p className='fs_12 fc_grey60 m-b-20'>Set up</p>
                                    <ImageThumbnailModify                                
                                        addedClass='dflx_ac_jcent w440 h200 relative image_modify'
                                        imageID='imageModify'
                                        imageSrc='image_thumbnail_sample.png'
                                    >
                                    </ImageThumbnailModify>
                                </div>
                            </div>
                        </section>

                        <div className="dflx m-t-80">
                            <p className='fs_bold w120 m-t-80'>Profile</p>
                            <div className='w200'>                                
                                <p className='fs_12 fc_grey60 m-b-40'>Empty</p>
                                <PhotoComponent imgName={'prof_40.svg'}>
                                    <p className='circle_g32'>
                                        <ImgComponent src={'pencil_16.svg'} />
                                    </p>
                                </PhotoComponent>
                            </div>
                            <div className='w200'>                                
                                <p className='fs_12 fc_grey60 m-b-40'>Hover</p>
                                <PhotoComponent imgName={'prof_40.svg'}>
                                    <p className='circle_g32 hover'>
                                        <ImgComponent src={'pencil_16.svg'} />
                                    </p>
                                </PhotoComponent>
                            </div>
                            <div className='w200'>                                
                                <p className='fs_12 fc_grey60 m-b-40'>Set up</p>
                                <PhotoComponent imgName={'image_select_sample.png'} className={'w200'}>
                                    <p className='circle_g32'>
                                        <ImgComponent src={'pencil_16.svg'} />
                                    </p>
                                </PhotoComponent>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        </div>
    );
};

export default Upload;
