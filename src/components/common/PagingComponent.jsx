import React from 'react';
import ImgComponent from './ImgComponent';

const PagingComponent = () => {
  return (
      <ul className="paging_ul">
          <li>
              <a href="#!" className='arrow'>
                  <ImgComponent src={'arr_prev_wh12.svg'} />
              </a>
          </li>
          <li>
              <a href="#!" className="on">1</a>
          </li>
          <li>
              <a href="#!">2</a>
          </li>
          <li>
              <a href="#!">3</a>
          </li>
          <li>
              <a href="#!" className='etc'>...</a>
          </li>
          <li>
              <a href="#!">10</a>
          </li>
          <li>
              <a href="#!" className='arrow'>
                  <ImgComponent src={'arr_next_wh12.svg'} />
              </a>
          </li>
      </ul>
  );
};

export default PagingComponent;
