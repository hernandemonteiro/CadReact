import React,{ Component } from 'react';
import axios from 'axios';
import Main from "../templates/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost/3000/users';

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Usuários
            </Main>
        )
    }
}