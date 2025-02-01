import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface Props{
  children?: ReactNode;
}


const HeaderLeft = ({children}:Props) => {

  const navigator = useNavigate();

  return (
    <div className='header_left'>
        <h1 className='header_logo'>
            <a href="#!" onClick={() => navigator('/main')}>
                <span className='sp_logo_uniplus'></span>
            </a>
        </h1>
        {children}
    </div>
  );
};

export default HeaderLeft;