import React from 'react';
import Footer_leftpart_categories from './Footer_parts__components/Footer_leatpart_categories';
import Footer_leftpart_about_us from './Footer_parts__components/Footer_leftpart_about__us';
import Footer_leftpart_yeardate from './Footer_parts__components/Footer_leftpart_yeardate';

const Footer_leftpart = () => {
    return (
        <div className='footer-leftpart'>
            <Footer_leftpart_categories />
            <Footer_leftpart_about_us />
            <Footer_leftpart_yeardate />
        </div>
    )
}



export default Footer_leftpart