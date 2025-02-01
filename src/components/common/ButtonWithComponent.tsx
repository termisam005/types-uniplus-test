import {ReactNode} from 'react';

interface Props{
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
	onClick?: () => void;
	txt?: string;
  children?: ReactNode;
}


const ButtonWithComponent = ({ type, id, className, onClick, children }:Props) => {
  
  return (
    <button type={type} id={id} className={className} onClick={onClick}>
        {children}
    </button>
  );
};

export default ButtonWithComponent;