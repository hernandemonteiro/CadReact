import React from 'react';
import Main from '../templates/Main';

export default props =>
    <Main icon='home' title='Inicio'
        subtitle='Segundo Projeto do Capitulo React.'>
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema construido para treinar
            desenvolvimento em React!</p>
    </Main>