import React from 'react';

const BAButton = (props) => {
    const {btnValue,btnClick,styles}=props
    return (
         
            <button style={styles} className='btn btn-primary m-1' onClick={btnClick}>{btnValue}</button>
        
    );
}

export default BAButton;
