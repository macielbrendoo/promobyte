import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './styles.css';
import { FaCoins, FaSignInAlt } from 'react-icons/fa';

function Login() {
    return (
        <div className="login-container">
            <div className="card card-box shadow">
                <Link to="/" className="title text-decoration-none">
                    <h1 className="display-4"><FaCoins/> PromoByte</h1>
                </Link>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" className="
                        form-control" id="username" placeholder="Digite seu usuário" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
                    </div>
                    <button className="btn btn-success btn-block"><FaSignInAlt/> Entrar</button>
                    <button className="btn btn-primary btn-block">Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}

export default Login;