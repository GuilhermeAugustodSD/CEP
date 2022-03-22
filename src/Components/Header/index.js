import React from "react";
import './style.css';



function Header(){
    return (
       
        <div className="menu">
            <nav>
                <img className="logo" src="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png"
                data-retina="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png"></img>
                <input type="checkbox" id="check"></input>
                <label for="check" className="check_botton">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li>
                        <a href="https://manejebem.com/"><span>HOME</span></a>
                    </li>
                    <li>
                        <a href="https://manejebem.com/historia-da-manejebem/"><span>MANEJEBEM</span></a>
                    </li>
                    
                    <li>
                        <a href="https://manejebem.com/projetos-esg/"><span>ESG</span></a>
                    </li>
                    <li>
                        <a href="https://manejebem.com/assistencia-tecnica-agricola/"><span>ASSISTÊNCIA</span></a>
                    </li>
                    <li>
                        <a href="https://manejebem.com/tecnologias-na-agricultura/"><span>TECNOLOGIAS</span></a>
                    </li>
                    <li>
                        <a href="https://manejebem.com/impacto-socioambiental-na-agricultura/"><span>IMPACTO</span></a>
                    </li>
                    <li>
                        <a href="https://manejebem.com/projetos-de-sustentabilidade-da-manejebem/"><span>CASES</span></a>
                    </li>
                    <li>
                        <a className="active"href="#"><span>CONSULTAR CEP</span></a>
                    </li>
                </ul>
            </nav>
        </div>  
           
    );
}

export default Header;