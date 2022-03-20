import React from "react";
import './Header.css';



function Header(){
    return (
        <div className="Conteiner_header">
            <div className="div_logo">
                <img className="image_logo" src="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png"
                data-retina="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png"></img>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <a href="https://manejebem.com/"><span>Home</span></a>
                        </li>
                    </ul>
                </nav>

            </div>
            
        </div>
    );
}

export default Header;