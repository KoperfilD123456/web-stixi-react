import React from 'react';
import Footer_leftpart from './Footer_parts/Footer_leftpart';
import Footer_rightpart from './Footer_parts/Footer_rightpart';

const Footer = () => {
    return (
            <div className='footer'>
                <Footer_leftpart />
                <Footer_rightpart />
            </div>
    );
}


export default Footer