import React from 'react';


const TexttabComponent = ({ className, onClick, txt }) => {

  return (
    <a href="#!" className={className} onClick={onClick}>
        {txt}
    </a>
  );
};

export default TexttabComponent;