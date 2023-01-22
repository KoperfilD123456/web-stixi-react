import React from 'react';


import Top_navbar_favorit from './Top_navbar_components/Top_navbar_favorit';
import Top_navbar_main_categories from './Top_navbar_components/Top_navbar_main_categories';


const Navbar_top = (props) => {
    return (
        <div className='header_navbar'>
            <Top_navbar_favorit />
            <Top_navbar_main_categories />
        </div>
    );
}

export default Navbar_top