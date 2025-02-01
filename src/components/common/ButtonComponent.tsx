import {memo} from 'react';

interface Props {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	className?: string;
	id?: string;
	txt?: string;
}


const ButtonComponent = memo(({ type, id, className, onClick, txt }:Props) => {
  return (
    <button type={type} id={id} className={className} onClick={onClick}>{txt}</button>
  );
});

export default ButtonComponent;