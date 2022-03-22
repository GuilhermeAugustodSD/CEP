import React from "react";
import './style.css';



function Header(){
    return (
        <header>
            <div className="Conteiner_header">
                <div className="div_logo">
                    <img className="image_logo" src="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png"
                    data-retina="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png"></img>
                </div>
                <div className="menu">
                    <nav>
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
                        </ul>
                    </nav>
                </div>  
            </div>
        </header>
    );
}

export default Header;