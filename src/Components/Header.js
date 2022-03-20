import React from "react";
import './Header.css';



function Header(){
    return (
        <div id="Top_bar" class="">
            <div class="container">
                <div class="column one">
                    <div class="top_bar_left clearfix" style="width: 855px;">
                        <div class="logo">
                            <a id="logo" href="https://manejebem.com" title="ManejeBem" 
                            data-height="60" data-padding="10"/>
                            <img class="logo-main scale-with-grid" 
                            src="https://manejebem.com/wp-content/uploads/2021/09/logo-maneje-bem.png" 
                            data-retina="https://manejebem.com/wp-content/uploads/2021/09/logotipo-maneje-bem.png" data-height="60" 
                            alt="logo maneje bem" data-no-retina=""/>
                        </div>   
                        <div class="menu_wrapper">
                            <nav id="menu" style="display: block;"><ul id="menu-manejebem" class="menu menu-main"><li id="menu-item-55" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item"><a href="https://manejebem.com/"><span>HOME</span></a></li>
                                <li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children submenu"><a href="https://manejebem.com/historia-da-manejebem/"><span>MANEJEBEM</span></a>
                                <ul class="sub-menu" style="display: none;">
                                <li id="menu-item-177" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://manejebem.com/historia-da-manejebem/"><span>HISTÓRIA</span></a></li>
                                <li id="menu-item-176" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://manejebem.com/consultoria-especializada-em-agronegocio/"><span>SERVIÇOS</span></a></li>
                                <li id="menu-item-460" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://www.manejebem.com.br"><span>COMUNIDADE</span></a></li>
                                <li id="menu-item-77" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy last-item"><a href="https://manejebem.com/politica-de-privacidade-manejebem/"><span>PRIVACIDADE</span></a></li>
                                </ul>
                                <span class="menu-toggle"></span></li>
                                <li id="menu-item-58" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://manejebem.com/projetos-esg/"><span>ESG</span></a></li>
                                <li id="menu-item-169" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://manejebem.com/assistencia-tecnica-agricola/"><span>ASSISTÊNCIA</span></a></li>
                                <li id="menu-item-160" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://manejebem.com/tecnologias-na-agricultura/"><span>TECNOLOGIAS</span></a></li>
                                <li id="menu-item-165" class="menu-item menu-item-type-post_type menu-item-object-page last"><a href="https://manejebem.com/impacto-socioambiental-na-agricultura/"><span>IMPACTO</span></a></li>
                                <li id="menu-item-185" class="menu-item menu-item-type-post_type menu-item-object-page last"><a href="https://manejebem.com/projetos-de-sustentabilidade-da-manejebem/"><span>CASES</span></a></li>
                                </ul></nav><a class="responsive-menu-toggle active" href="#"><i class="icon-menu-fine"></i></a>				</div>

                        <div class="secondary_menu_wrapper"></div>

                        <div class="banner_wrapper"></div>

                        <div class="search_wrapper">
                            
                            <form method="get" id="searchform" action="https://manejebem.com/">
                                <i class="icon_search icon-search-fine"></i>
                                <a href="#" class="icon_close">
                                    <i class="icon-cancel-fine"></i>
                                </a>
                                <input type="text" class="field" name="s" placeholder="Digite sua busca"/>
                                <input type="submit" class="display-none" value=""/>

                            </form>
                        </div>

                    </div>

                    <div class="top_bar_right" style="">
                        <div class="top_bar_right_wrapper">
                            <a id="search_button" href="#">
                                <i class="icon-search-fine"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header();