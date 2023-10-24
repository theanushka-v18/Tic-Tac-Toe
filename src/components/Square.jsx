import React from 'react';

const Square = ({value, onClick}) => {
  return (
    <div className='square' onClick={onClick}>
      <h5 className={(value=='X') ? 'X' : 'O'}>{value}</h5>
    </div>
  )
}

export default Square;
