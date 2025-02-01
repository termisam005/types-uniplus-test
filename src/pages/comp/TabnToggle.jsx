import React from 'react';
// import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import TexttabComponent from '../../components/common/TexttabComponent';
import ConnectComponent from '../../components/common/ConnectComponent';
import SwitchComponent from '../../components/common/SwitchComponent';
import SwitchComponentOn from '../../components/common/SwitchComponentOn';


const TabnToggle = () => {

    // const [tabButton, setTabButton] = useState(1);
    // const onClickTab = (index) => {
    //     setTabButton(index);
    // }

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

            <div className='guide_center'>

                <article className='guide_top'>
                    <h1>Tab&Toggle</h1>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Button tab</h2>
                    </div>
                    <p className='lh_21'>간격 O : W: 레이블 길이에 따라 변경 가능 H: 고정 , 간격 2px<br/>
                    간격 X : 끝모서리만 Radius 적용</p>
                    <section className="comp_conts m-t-20">
                        <div className="comp_dl">
                            <p className="comp_dt p-t-15">Large</p>
                            <div className='w120'>
                                <p className="fs_12 fc_grey60 p-t-15 tar">upper card</p>
                                <p className="fs_12 fc_grey60 m-t-48 tar">footer center</p>
                            </div>
                            <div className="comp_dd m-l-40">
                                <div className="compline grid_column2">
                                    <div className="components">
                                        <div className="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m selected w120'} txt={'Selected'} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m w120'} txt={'Default'}  />
                                            <ButtonComponent type={'button'} className={'btn_toggle_floating btn_m disabled w120'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="compline dflx m-t-20">
                                    <div className="dflx">
                                        <div className="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m selected w120'} txt={'상황관리'} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'긴급차량'} />
                                        </div>
                                    </div>
                                    <div className="dflx m-l-40">
                                        <div className="tab_line">
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m selected w120'} txt={'상황관리'} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'긴급차량'} />
                                            <ButtonComponent type={'button'} className={'btn_ffb btn_m w120'} txt={'돌발금지'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="comp_dl">
                            <div className="comp_dt p-t-15">Small</div>
                            <div className='w120'>
                                <p className="fs_12 fc_grey60 p-t-20 tar">Primary</p>
                                <p className="fs_12 fc_grey60 m-t-32 tar">Card submenu</p>
                                <p className="fs_12 fc_grey60 m-t-32 tar">Card body contents</p>
                            </div>
                            <div className="comp_dd m-l-40">
                                <div className="compline grid_column2 m-b-20">
                                    <div className="components">
                                        <div className="tab_line gap_4">
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s selected'} txt={'Selected'} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s'} txt={'Default'} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s'} txt={'Default'} />
                                            <ButtonComponent type={'button'} className={'btn_toggle_primary btn_s disabled'} txt={'Disabled'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="compline gap_32 m-b-20">
                                    <div className="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs'} txt={'Label'} />
                                    </div>
                                    <div className="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected w140'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w140'} txt={'Label'} />
                                    </div>
                                    <div className="tab_line w280">
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected w-33'} txt={'Label'}  />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w-33'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w-33'} txt={'Label'} />
                                    </div>
                                </div>
                                <div className="compline gap_32 m-b-20">
                                    <div className="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s selected'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s m-l-4'} txt={'Label'} />
                                    </div>
                                    <div className="tab_line">
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s selected w140'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s w140 m-l-4'} txt={'Label'} />
                                    </div>
                                    <div className="tab_line w280">
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s selected w-33'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s w-33 m-l-4'} txt={'Label'} />
                                        <ButtonComponent type={'button'} className={'btn_line2 btn_s w-33 m-l-4'} txt={'Label'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Text tab</h2>
                    </div>
                    <section className="dflx">
                        <p className="comp_size w80">16px</p>
                        <p className="comp_size w80"></p>
                        <div className="dflx_ac gap_30 w240">
                            <TexttabComponent className={'a_link more selected'} txt={'Selected'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                        </div>
                        <div className="dflx_ac gap_30 m-l-60">
                            <TexttabComponent className={'a_link more selected'} txt={'Selected'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                            <TexttabComponent className={'a_link more'} txt={'Default'} />
                        </div>
                    </section>
                    <section className="dflx m-t-30">
                        <p className="comp_size w80">14px</p>
                        <p className="comp_size w80">30</p>
                        <div className="dflx_ac gap_30 w240">
                            <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                        </div>
                        <div className="dflx_ac gap_30 m-l-60">
                            <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                        </div>
                    </section>
                    <section className="dflx m-t-30">
                        <p className="comp_size w80">14px</p>
                        <p className="comp_size w80">24</p>
                        <div className="dflx_ac gap_24 w240">
                            <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                        </div>
                        <div className="dflx_ac gap_30 m-l-60">
                            <TexttabComponent className={'a_link selected'} txt={'Selected'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                            <TexttabComponent className={'a_link'} txt={'Default'} />
                        </div>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top">
                        <h2>Floating tab/toggle</h2>
                    </div>
                    <section className="comp_conts p-t-20">
                        <dl className="comp_dl">
                            <dt className="comp_dt p-t-15 w196">
                                <p className='fs_16_bold'>Text type</p>
                                <p className='fs_12 fc_grey60 m-t-12 lh_16'>카드 상단에 상위탭으로 사용<br/>
                                (사용지양, 버튼탭 우선 사용)<br/>
                                H 40px 고정<br/>
                                W: 카드와 동일</p>
                            </dt>
                            <dd className="comp_dd m-l-40">
                                <div className="dflx_as">
                                    <p className='fs_12 fc_grey60 m-t-12 m-r-40 w60 tar'>2개</p>
                                    <ConnectComponent className={'connect_line sky'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <span className="vtline_20 m-l-8 m-r-8"></span>
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                    </ConnectComponent>
                                </div>

                                <div className="dflx_as m-t-20">
                                    <p className='fs_12 fc_grey60 m-t-12 m-r-40 w60 tar'>3개 이상</p>
                                    <ConnectComponent className={'connect_line more sky'}>
                                        <TexttabComponent className={'a_link short selected'} txt={'Selected'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                        <TexttabComponent className={'a_link short'} txt={'Default'} />
                                    </ConnectComponent>
                                    <p className="p-l-15"></p>
                                </div>

                                <div className="dflx_as m-t-20">
                                    <p className='fs_12 fc_grey60 m-t-12 m-r-40 w60 tar'>Overflow</p>
                                    <div className="connect_line sky w320">
                                        <div className="shadow left">
                                            <p className="arrow_box">
                                                <ImgComponent className={'w12 op06'} src={'arrow_left_fff_12.svg'} />
                                            </p>
                                        </div>
                                        <div className="horizon_line w280">
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short selected">
                                                    Selected
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                        </div>
                                        <div className="shadow right">
                                            <p className="arrow_box">
                                                <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="connect_line sky w320 m-l-20">
                                        <div className="horizon_line w280">
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short selected">
                                                    Selected
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                        </div>
                                        <div className="shadow right">
                                            <p className="arrow_box">
                                                <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dflx m-t-20">                                    
                                    <p className='fs_12 fc_grey60 m-t-12 m-r-40 w60 tar'>Overflow</p>
                                    <div className="connect_line sky w320">
                                        <div className="horizon_line w280">
                                            <div className="shadow left">
                                                <p className="arrow_box">
                                                    <ImgComponent className={'w12 op06'} src={'arrow_right_fff_12.svg'} />
                                                </p>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short selected">
                                                    Selected
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                            <div className="horibox">
                                                <a href="#!" className="a_link short">
                                                    Default
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                        <dl className="comp_dl">
                            <dt className="comp_dt p-t-15 w196">
                                <p className='fs_16_bold'>Icon type</p>
                                <p className='fs_12 fc_grey60 m-t-12 lh_16'>Footer only<br/>
                                일부 버튼은 토글로 사용할 수 있음<br/>
                                토글=독립적으로 각각 동작(ON/OFF)<br/>
                                탭=연계되어 동작(하나만 선택 가능)</p>
                            </dt>
                            <dd className="comp_dd m-l-40">
                                <div className="compline m-b-30">
                                    <div className="tab_line">
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="w24" src={'minus_fff_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="w24" src={'plus_line_fff_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <p className="p-l-30"></p>
                                    <div className="tab_line">
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'legend_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'legend_sky_24.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb btn_m'}>
                                            <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                            <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div className="compline m-b-30">
                                    <div className="connect_line h40">
                                        <ButtonWithComponent className={'btn_icon btn_m selected'}>
                                            <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'map_fill_sky_24.svg'} />
                                            <span className="word">소통정보</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'machine_20.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'machine_sky_20.svg'} />
                                            <span className="word">시설물</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'heatmap_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'heatmap_fill_sky_24.svg'} />
                                            <span className="word">히트맵</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'analysis_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'analysis_fill_sky_24.svg'} />
                                            <span className="word">현황</span>
                                        </ButtonWithComponent>
                                        <section className="control_line">
                                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb mini'}>
                                                <ImgComponent className="w20" src={'minus_fff_24.svg'} />
                                            </ButtonWithComponent>
                                            <div className="progress_box mini">
                                                <div className="bar scrubber">
                                                    <div className="empty"></div>
                                                    <div className="bar progress white"></div>
                                                </div>
                                            </div>
                                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb mini'}>
                                                <ImgComponent className="w20" src={'plus_line_fff_24.svg'} />
                                            </ButtonWithComponent>
                                        </section>
                                    </div>
                                </div>
                                <div className="compline m-b-30">
                                    <div className="connect_line h40">
                                        <ButtonWithComponent className={'btn_icon btn_m selected'}>
                                            <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'map_fill_sky_24.svg'} />
                                            <span className="word">일반</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'satellite_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'satellite_fill_sky_24.svg'} />
                                            <span className="word">위성</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_icon btn_m'}>
                                            <ImgComponent className={'img w24 op04'} src={'mountain_fill_fff_24.svg'} />
                                            <ImgComponent className={'img_on w24 '} src={'mountain_fill_sky_24.svg'} />
                                            <span className="word">지형</span>
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div className="compline m-b-30">
                                    <div className="connect_line box">
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon selected'}>
                                            <span className="circle_grey32">
                                                <ImgComponent className="img w24 op04" src={'map_fill_fff_24.svg'} />
                                                <ImgComponent className="img_on w24 op04" src={'map_fill_sky_24.svg'} />
                                            </span>
                                            <span className="word">일반</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                            <span className="circle_grey32 line">
                                                <ImgComponent className="img w24 op04" src={'satellite_fill_fff_24.svg'} />
                                                <ImgComponent className="img_on w24 op04" src={'satellite_fill_fff_24.svg'} />
                                            </span>
                                            <span className="word">위성</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon'}>
                                            <span className="circle_grey32 line">
                                                <ImgComponent className="img w24 op04" src={'mountain_fill_fff_24.svg'} />
                                                <ImgComponent className="img_on w24 op04" src={'mountain_fill_sky_24.svg'} />
                                            </span>
                                            <span className="word">지형</span>
                                        </ButtonWithComponent>
                                        <section className="control_line">
                                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb medium'}>
                                                <ImgComponent className="w20" src={'minus_fff_24.svg'} />
                                            </ButtonWithComponent>
                                            <div className="progress_box">
                                                <div className="bar scrubber">
                                                    <div className="empty"></div>
                                                    <div className="bar progress white"></div>
                                                </div>
                                            </div>
                                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb medium'}>
                                                <ImgComponent className="w20" src={'plus_line_fff_24.svg'} />
                                            </ButtonWithComponent>
                                        </section>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

                <article className="Gr_contents">
                    <div className="comp_top p-b-16">
                        <h2>Switch</h2>
                    </div>
                    <section className="comp_conts">
                        <dl className="comp_dl">
                            <dt className='comp_dt p-t-15'></dt>
                            <dd className="comp_dd">
                                <div className="dflx_as gap_40">
                                    <p className="comp_size"></p>
                                    <p className='fs_12 fc_grey60'>Default</p>
                                    <p className='fs_12 fc_grey60'>Fill+Line<br/>
                                    (Default)</p>
                                    <p className='fs_12 fc_grey60'>Line</p>
                                </div>
                                <div className="compline gap_40 m-t-40">
                                    <p className="comp_size">On</p>
                                    <SwitchComponentOn labelClass={'switch_label'} spanClass="switch_button" />
                                    <SwitchComponentOn labelClass={'switch_label fill_line'} spanClass="switch_button" />
                                    <SwitchComponentOn labelClass={'switch_label line'} spanClass="switch_button" />
                                </div>
                                <div className="compline gap_40 m-t-20">
                                    <p className="comp_size">Off</p>
                                    <SwitchComponent labelClass={'switch_label'} spanClass="switch_button" />
                                    <SwitchComponent labelClass={'switch_label fill_line'} spanClass="switch_button" />
                                    <SwitchComponent labelClass={'switch_label line'} spanClass="switch_button" />
                                </div>
                            </dd>
                        </dl>
                    </section>
                </article>

            </div>

        </div>
      </div>
    );
};

export default TabnToggle;
