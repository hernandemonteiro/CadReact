import React from "react";
import './Nav.css';

export default props =>
<aside className="menu-area">
    <nav className="menu">
        {/* refatorar */}
        <a href='/'>
            <i className="fa fa-home"></i> Inicio
        </a>
        <a href='/users'>
            <i className="fa fa-users"></i> Usuários
        </a>
    </nav>
</aside>