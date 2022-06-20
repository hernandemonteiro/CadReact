import React,{ Component } from 'react';
import axios from 'axios';
import Main from "../templates/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost/3000/users';
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {

    state = {...initialState};

    clear() {
        this.setState({user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdateList(resp.data);
        });
    }

    getUpdateList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label><br/>
                            <input type='text' className='form-controll'
                            name='name'
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite o nome!'/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label><br/>
                            <input type='email' className='form-controll'
                            name='email'
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite seu email!'/>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btnprimary"
                        click={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary"
                        click={e => this.clear(e)}>
                            Cancelar 
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}