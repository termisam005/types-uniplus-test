import React from 'react';
import Header from '../../components/header/Header';
import GnbComponents from '../../components/header/GnbComponents';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';

import CheckComponent from '../../components/common/CheckComponent';
import CheckTextComponent from '../../components/common/CheckTextComponent';
import TreeComponentOpen from '../../components/accordion/TreeComponentOpen';
import TreePartComponentOpen from '../../components/accordion/TreePartComponentOpen';
import TreePartComponentClosed from '../../components/accordion/TreePartComponentClosed';
import TreeCheckComponent from '../../components/accordion/TreeCheckComponent';
import TreeCheckComponentOpen from '../../components/accordion/TreeCheckComponentOpen';
import TreeCheckComponentClosed from '../../components/accordion/TreeCheckComponentClosed';
import TreeAccordComponent from '../../components/accordion/TreeAccordComponent';


const Tree = () => {

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
                        <h1>Tree</h1>
                    </article>

                    <article className="Gr_contents" style={{marginTop:'100px'}}>
                        <div className="comp_top flex_wrap">
                            <h2>Item</h2>
                        </div>
                        <div className="m-t-80">
                            <div className="dflx" style={{gap:'50px'}}>
                                <div className="relative w200">
                                    <p className="w-100 fs_bold" style={{position:'absolute', top:'-60px'}}>Check box</p>
                                    <p className='fs_13 m-b-40'>Lv.1</p>
                                    <TreeComponentOpen accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'일부요소 선택(Open)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice1'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice2'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'}  defaultChecked={'defaultChecked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice3'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />
                                        </div> 
                                    </TreeComponentOpen>
                                    <TreeComponentOpen accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'일부요소 선택(Closed)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice1'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice2'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'}  defaultChecked={'defaultChecked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice3'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />
                                        </div> 
                                    </TreeComponentOpen>
                                    <div className="accordion_block">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'choice5'} 
                                            labelClass={'fs_13 fc_white'} txt={'전체 선택(Open)'} defaultChecked={'defaultChecked'} />                                    
                                        </div>
                                    </div>
                                    <div className="accordion_block">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'choice5'} 
                                            labelClass={'fs_13 fc_white'} txt={'전체 선택(Closed)'} defaultChecked={'defaultChecked'} />                                    
                                        </div>
                                    </div>
                                    <div className="accordion_block">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckTextComponent checkClass={'check_text w-100'} text={'미선택(Open)'}>
                                                <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                                                <ImgComponent className={'img_selected w20'} src={'checkbox_checked_20.svg'} />
                                            </CheckTextComponent>
                                        </div>
                                    </div>
                                    <div className="accordion_block">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckTextComponent checkClass={'check_text w-100'} text={'미선택(Closed)'}>
                                                <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                                                <ImgComponent className={'img_selected w20'} src={'checkbox_checked_20.svg'} />
                                            </CheckTextComponent>                        
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w200">
                                    <p className='fs_13 m-b-40'>Lv.2</p>
                                    <div className="accordion_block m-t-80">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'choice5'} 
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />                                    
                                        </div>
                                    </div>
                                    <div className="accordion_block m-t-48">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckTextComponent checkClass={'check_text w-100'} text={'미선택 text text'}>
                                                <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                                                <ImgComponent className={'img_selected w20'} src={'checkbox_checked_20.svg'} />
                                            </CheckTextComponent>                        
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w200">
                                    <p className="w-100 fs_bold" style={{position:'absolute', top:'-60px'}}>Accordion + cb</p>
                                    <p className='fs_13 m-b-40'>Lv.1</p>
                                    <TreePartComponentOpen accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'일부요소 선택(Open)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice11'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice12'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice13'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                        </div>
                                    </TreePartComponentOpen>
                                    <TreePartComponentClosed accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'일부요소 선택(Closed)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice11'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice12'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice13'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                        </div>
                                    </TreePartComponentClosed>
                                    <TreeCheckComponentOpen accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'전체 선택(Open)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice14'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice15'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} defaultChecked={'defaultChecked'} />
                                        </div> 
                                    </TreeCheckComponentOpen>
                                    <TreeCheckComponentClosed accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'전체 선택(Closed)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice14'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice15'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} defaultChecked={'defaultChecked'} />
                                        </div> 
                                    </TreeCheckComponentClosed>
                                    <TreeCheckComponent accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'미선택(Open)'} toggleClass>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice14'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice15'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} />
                                        </div> 
                                    </TreeCheckComponent>
                                    <TreeCheckComponent accordClass={'accordion_block'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'미선택(Closed)'}>
                                        <div className="display_grid p-l-24 auto_row32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice14'}
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} />
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type as_center'} checkId={'choice15'}
                                            labelClass={'fs_13 fc_white'} txt={'미선택 text text'} />
                                        </div> 
                                    </TreeCheckComponent>
                                </div>
                                <div className="relative w200">
                                    <p className='fs_13 m-b-40'>Lv.2</p>
                                    <div className="accordion_block m-t-80">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckComponent type={'checkbox'} checkClass={'checkbox_type'} checkId={'choice5'} 
                                            labelClass={'fs_13 fc_white'} txt={'선택 text text'} defaultChecked={'defaultChecked'} />                                    
                                        </div>
                                    </div>
                                    <div className="accordion_block m-t-48">
                                        <div className="tree_button dflx_ac gap_8 h32">
                                            <CheckTextComponent checkClass={'check_text w-100'} text={'미선택 text text'}>
                                                <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                                                <ImgComponent className={'img_selected w20'} src={'checkbox_checked_20.svg'} />
                                            </CheckTextComponent>                        
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w200">
                                    <p className="w-100 fs_bold" style={{position:'absolute', top:'-60px'}}>Accordion</p>
                                    <TreeAccordComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'Lv.1 Open'} show toggleClass>
                                        <div className="p-l-48 fs_13 display_grid auto_row32">
                                            <span className="as_center">Lv.2</span>
                                            <span className="as_center">Lv.2-1</span>
                                        </div>
                                    </TreeAccordComponent>
                                    <TreeAccordComponent accordClass={'accordion_block accord'} treeTopClass={'tree_button dflx_ac gap_8 h32'} 
                                    checkClass={'check_text w-100'} txt={'Lv.1 Closed'} >
                                        <div className="p-l-48 fs_13 display_grid auto_row32">
                                            <span className="as_center">Lv.2</span>
                                            <span className="as_center">Lv.2-1</span>
                                        </div>
                                    </TreeAccordComponent>
                                </div>                    
                            </div>
                        </div>
                    </article>

                </div>

            </div>
        </div>
    );
};

export default Tree;
