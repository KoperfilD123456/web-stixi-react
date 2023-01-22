import React from 'react';
import Footer_rightpart_contacts from './Footer_parts__components/Footer_rightpart_contacts';
import Footer_rightpart_politics from './Footer_parts__components/Footer_rightpart_politics';

const Footer_rightpart = () => {
    return (
        <div className='footer-rightpart'>
            <Footer_rightpart_contacts />
            <Footer_rightpart_politics />
        </div>
    )
}



export default Footer_rightpart