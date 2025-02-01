import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';
import ButtonComponent from '../../components/common/ButtonComponent';

import CheckComponent from '../../components/common/CheckComponent';
import SelectBoxLine from '../../components/select/SelectBoxLine';
import LabelComponent from '../../components/common/LabelComponent';
import TooltipComponent from '../../components/common/TooltipComponent';
import TableBoxComponent from '../../components/common/TableBoxComponent';
import Paging10Component from '../../components/common/Paging10Component';
import PagingComponent from '../../components/common/PagingComponent';


const Tables = () => {

    //search 이벤트
    const [search, setSearch] = useState('');
    const [srchInput, setSrchInput] = useState();
    const [deletor, setDeletor] = useState(false);

    const writePut = (e) => {
        setSearch(e.target.value);
        setSrchInput(true);
        setDeletor(true);
    }
    const closeBoard = () => {
        setSrchInput(false);
    }
    const onDelete = (e) => {
        setSearch(e.target.value = '');
        setSrchInput(false);
        setDeletor(false);
    }

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
                        <h1>Tables</h1>
                    </article>

                    <article className="Gr_contents">

                        <section className="comp_conts" style={{ marginTop:'270px' }}>
                            <div className="dashed_box p-20">
                                <div className="dflx w-100">
                                    <div className="relative">
                                        <h2 style={{position:'absolute', top:'-200px'}}>Element</h2>

                                        <p className="fs_bold" style={{position:'absolute', top:'-110px', whiteSpace:'nowrap'}}>36px</p>
                                        <p className="fs_14" style={{position:'absolute', top:'-70px', whiteSpace:'nowrap'}}>
                                            Height: 48 / 36 / 24px 
                                        </p>

                                        <div className="dflx gap_20">
                                            <div className="w120">
                                                <table className="table_box ">
                                                    <thead>                                                    
                                                        <tr>
                                                            <th className="tac">Row 1</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="row_type2">
                                                            <td className="tac">Row 2</td>      
                                                        </tr>
                                                        <tr className="on">
                                                            <td className="tac">Hover / Selected</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="tac">
                                                                <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'checkbox01'} 
                                                                name={'checkbox_list'} />
                                                            </th>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td className="tac">
                                                                <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'checkbox02'} 
                                                                name={'checkbox_list'} />
                                                            </td>
                                                        </tr>
                                                        <tr className="on">
                                                            <td className="tac">
                                                                <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'checkbox03'} 
                                                                name={'checkbox_list'} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tac ghost">
                                                                Ghost
                                                            </td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td>
                                                                <div className="dflx_ac_jcent">
                                                                    <LabelComponent className={'label_tag grade_color02 fs_11'} txt={'Label'} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="row_error">
                                                            <td className="tac">Row 2</td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td className="tac">
                                                                <ImgComponent className={'w14'} src={'arrow_go_14.svg'} />
                                                            </td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td>
                                                                <div className='dflx_ac_jcent'>
                                                                    <SelectBoxLine wrapClass={'select_wrap w104'} placeholder={'Selected'} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="w120">
                                                <table className="table_box ">
                                                    <thead>                                                    
                                                        <tr>
                                                            <th className="tac">Row 1</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="row_type2">
                                                            <td className="tac">Row 2</td>
                                                        </tr>
                                                        <tr className="on">
                                                            <td className="tac">Hover / Selected</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ghost"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ghost"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ghost"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ghost"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ghost"></td>
                                                        </tr>
                                                        <tr className="row_error">
                                                            <td className="tac">Row 2</td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td className="tac">
                                                                <ImgComponent style={{transform:'rotate(180deg)'}} className={'w14'} src={'arrow_go_14.svg'} />
                                                            </td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td>
                                                                <div className="dflx_ac_jcent">
                                                                    <SelectBoxLine wrapClass={'select_wrap w104'} placeholder={'Selected'} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="w120">
                                                <table className="table_box ">
                                                    <thead>
                                                        <tr>
                                                            <th className="tac">Row 1</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="row_type2">
                                                            <td className="tac">Row 2</td>
                                                        </tr>
                                                        <tr className="on">
                                                            <td className="tac">Hover / Selected</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="tac">
                                                                <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'checkbox04'} 
                                                                name={'checkbox_list'} />
                                                            </th>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td className="tac">
                                                                <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'checkbox05'} 
                                                                name={'checkbox_list'} />
                                                            </td>
                                                        </tr>
                                                        <tr className="on">
                                                            <td className="tac">
                                                                <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'checkbox06'} 
                                                                name={'checkbox_list'} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="tac">
                                                                Ghost
                                                            </td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td>
                                                                <div className="dflx_ac_jcent">
                                                                    <LabelComponent className={'label_tag grade_color02 fs_11'} txt={'Label'} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="row_error">
                                                            <td className="tac">Row 2</td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td className="tac">
                                                                <ImgComponent className={'w14'} src={'arrow_go_14.svg'} />
                                                            </td>
                                                        </tr>
                                                        <tr className="row_type2">
                                                            <td>
                                                                <div className="dflx_ac_jcent">
                                                                    <SelectBoxLine wrapClass={'select_wrap w104'} placeholder={'Selected'} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="w120">
                                                <div>
                                                    <table className="table_box ">
                                                        <tbody>
                                                            <tr>
                                                                <td className="table__cell on">
                                                                    <InputComponent type={'text'} className={'wrput on'} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="m-t-60">
                                                    <table className="table_box ">
                                                        <tbody>
                                                            <tr className="on">
                                                                <td className="table__cell">
                                                                    <TooltipComponent className={'error_tooltip gap_2'}>
                                                                        <ImgComponent className={'w14'} src={'icon_exclamation_mark.svg'} />
                                                                        <span className="fs_13 fc_white">
                                                                            Error message
                                                                        </span>
                                                                    </TooltipComponent>
                                                                    <InputComponent type={'text'} className={'wrput error tac'} defaultValue={'Error'} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="m-t-60">
                                                    <table className="table_box ">
                                                        <tbody>
                                                            <tr>
                                                                <td className="table__cell disable">
                                                                    <InputComponent type={'text'} className={'wrput tac'} defaultValue={'Disabled'} disabled={'disabled'} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative m-l-100 flex1">
                                        <h2 style={{position:'absolute', top:'-200px'}}>Scroll</h2>

                                        <div className="dflx_ac gap_2">
                                            <h3 className="fs_bold fc_primary">Table title</h3>

                                            <div className='m-l-a'>
                                                <article className="pos_rel">
                                                    <div onClick={closeBoard} className={srchInput? 'box_bg on':'box_bg'}></div>
                                                    <section className={'srch_line'}>
                                                        <div className={'put_zone w220'}>
                                                            <div className={srchInput? 'srch_zone line w-100 on' : 'srch_zone line w-100'}>
                                                                <button type="button" className={'bt_srch op04'}></button>
                                                                <input type={'text'} className={srchInput? 'srch_put p-r-24' : 'srch_put'} placeholder={'검색'} 
                                                                defaultValue={search} onChange={writePut} />
                                                                <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                                                                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <ButtonComponent type={'submit'} txt={'검색'} className={'btn_srch28 word shadow'} />
                                                    </section>
                                                </article>
                                            </div>
                                        </div>

                                        <div className="m-t-12 h200 p-b-4 scroll" style={{width:'520px'}}>
                                            <table className="table_box w720">
                                                <caption className="display_none">테이블 리스트</caption>
                                                <thead>                                                    
                                                    <tr>
                                                        <th className="tac w40">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox01'} 
                                                            name={'checkbox_list'} />
                                                        </th>
                                                        <th className="tac w120">Row 1</th>
                                                        <th className="tac w400">Row 1</th>
                                                        <th className="tac">Row 1</th>
                                                    </tr>
                                                </thead>
                                                <tbody>                                                
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox02'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 2</td>
                                                        <td className="tac">Row 2</td>
                                                        <td className="tac">Row 2</td>
                                                    </tr>
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox03'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 3</td>
                                                        <td className="tac">Row 3</td>
                                                        <td className="tac">Row 3</td>
                                                    </tr>
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox04'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 4</td>
                                                        <td className="tac">Row 4</td>
                                                        <td className="tac">Row 4</td>
                                                    </tr>
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox05'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 5</td>
                                                        <td className="tac">Row 5</td>
                                                        <td className="tac">Row 5</td>
                                                    </tr>
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox06'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 6</td>
                                                        <td className="tac">Row 6</td>
                                                        <td className="tac">Row 6</td>
                                                    </tr>
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox07'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 7</td>
                                                        <td className="tac">Row 7</td>
                                                        <td className="tac">Row 7</td>
                                                    </tr>
                                                    <tr className="row_type2">
                                                        <td className="tac">
                                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type td'} checkId={'table_checkbox08'} 
                                                            name={'checkbox_list'} />
                                                        </td>                                                    
                                                        <td className="tac w120">Row 8</td>
                                                        <td className="tac">Row 8</td>
                                                        <td className="tac">Row 8</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <Paging10Component wrapClass={"m-t-6 dflx_ac_jcent gap_8"} />
                                        
                                        <div className="m-t-30 h200 p-b-4 scroll" style={{width:'520px'}}>
                                            <TableBoxComponent tableClass={'uni_table01'} />
                                        </div>
                                        <div className="m-t-6 dflx_ac_jcent gap_8">
                                            <PagingComponent />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className="Gr_contents m-t-100">
                        <section className="comp_conts">
                            <h2>Usage</h2>
                            <div className="dflx_as m-t-80" style={{gap:'80px'}} >
                                <div>
                                    <h3 className="fs_bold m-b-16">No data</h3>

                                    <table className="table_box w480">
                                        <caption className="display_none">no data table</caption>
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>대메뉴 코드</th>
                                                <th>대분류 코드명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="row_type2">
                                                <td className="table__cell disable" colSpan="3">
                                                    <input type="text" className="wrput  tac" size="1" defaultValue="No data." disabled />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h3 className="fs_bold m-b-16 m-t-60">Split</h3>
                                    <table className="table_box w480">
                                        <caption className="display_none">split table</caption>
                                        <thead>
                                            <tr>
                                                <th rowSpan="2" className="">Row 1</th>
                                                <th colSpan="3" className="h18">Row 1</th>
                                                <th rowSpan="2" className="">Row 1</th>
                                            </tr>
                                            <tr>
                                                <th className="h18 top_white12">Row 1</th>
                                                <th className="h18 top_white12">Row 1</th>
                                                <th className="h18 top_white12 rht_white12">Row 1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="row_type2 tac">
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>        
                                    
                                    <table className="table_box w480 m-t-60">
                                        <caption className="display_none">split table</caption>
                                        <thead>
                                            <tr>
                                                <th rowSpan="2" colSpan="2" className="">
                                                    <div className="list_text m-a">범계 사거리</div>
                                                </th>
                                                <th className="">주기</th>
                                                <th colSpan="4" className="row_type2">96초</th>
                                            </tr>
                                            <tr>
                                                <th className="top_white12">
                                                    <div className="list_text m-a w-60">Phase 1</div>
                                                </th>
                                                <th>
                                                    <div className="list_text m-a w-60">Phase 2</div>
                                                </th>
                                                <th>                                             
                                                    <div className="list_text m-a w-60">Phase 3</div>
                                                </th>
                                                <th>                                             
                                                    <div className="list_text m-a w-60">Phase 4</div>
                                                </th>
                                                <th>                                               
                                                    <div className="list_text m-a w-60">Phase 5</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowSpan="3" className="tac">Offset
                                                    23</td>
                                                <td className="row_type1 tac">Ring A</td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="row_type1 tac">Ring A</td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="row_type1 tac">녹색시간</td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                                <td className="table__cell row_type2">
                                                    <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <h3 className="fs_bold m-b-16">Input</h3>
                                    <div className="dflx">
                                        <div className="fs_14 w80">Edit</div>
                                        <table className="table_box w480">
                                            <caption className="display_none">input edit table</caption>
                                            <colgroup>
                                                <col width="10%" />
                                                <col width="25%" />
                                                <col width="65%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>대메뉴 코드</th>
                                                    <th>대분류 코드명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="row_type2">
                                                    <td className="tac">01</td>
                                                    <td className="table__cell on">
                                                        <InputComponent type={'text'} className={'wrput on'} />
                                                    </td>
                                                    <td className="table__cell">
                                                        <InputComponent type={'text'} className={'wrput tac'} defaultValue={'Row 2'} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="dflx m-t-60">
                                        <div className="fs_14 w80">Error</div>
                                        <table className="table_box w480">
                                            <caption className="display_none">input error table</caption>
                                            <colgroup>
                                                <col width="10%" />
                                                <col width="25%" />
                                                <col width="65%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>대메뉴 코드</th>
                                                    <th>대분류 코드명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="row_type2">
                                                    <td className="tac">01</td>
                                                    <td className="table__cell">
                                                        <TooltipComponent className={'error_tooltip gap_2'}>
                                                            <ImgComponent className={'w14'} src={'icon_exclamation_mark.svg'} />
                                                            <span className="fs_13 fc_white">
                                                                Error message
                                                            </span>
                                                        </TooltipComponent>
                                                        <InputComponent type={'text'} className={'wrput error tac'} defaultValue={'Error'} />
                                                    </td>
                                                    <td className="table__cell">
                                                        <input type="text" className="wrput tac" size="1" defaultValue="Row 2" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </article>

                </div>

            </div>
        </div>
    );
};

export default Tables;
