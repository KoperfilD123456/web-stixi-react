import React from 'react';
import logo from "../img/favorit.png";
import categories_point from "../img/Polygon_1.png"


const Navbar_top = (props) => {
    return (
    <div className='header_navbar'>
        <div className='choused_favorit'>
            <img src={logo} alt="Иконка избранных произведений" />
            <div className='favorit_round'>
                <a href="#">0</a>
            </div>

        </div>
        <div className='header_navbar_main'>
            <div className='header_navbar_categories'>
                <a href="#">Произведения классиков</a>
                <a href="#">Стихи читателей</a>
                <a href="#">Блог</a>
                <a href="#">О нас</a>
            </div>
        </div>
    </div>

    );
}

export default Navbar_top