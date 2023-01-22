import React from 'react';
import logo from "../../../img/favorit.png";

const Top_navbar_favorit = (props) => {
    return (
        <div className='choused_favorit'>
            <img src={logo} alt="Иконка избранных произведений" />
            <div className='favorit_round'>
                <a href="#">0</a>
            </div>
        </div>
    )
}

export default Top_navbar_favorit