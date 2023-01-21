import React from 'react';



const Navbar_top = (props) => {
    return (
    <div className='header_navbar'>
        <div className='choused_favorit'></div>
        <div className='header_navbar_main'>
            <div className='header_navbar_categories'>
                <a href="#">Произведения классиков</a>
                <a href="#">Стихи читателей</a>
                <a href="#">Блог</a>
                <a href="#">О нас</a>
            </div>
            <div className='seacrh'></div>
        </div>
    </div>

    );
}

export default Navbar_top