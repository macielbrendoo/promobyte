import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


function CreatePromotion() {
    const history = useHistory();
    const [alertMessage, setAlertMessage] = useState('');
    const [formData, setFormData] = useState({
        product: '',
        originalPrice: 0,
        actualPrice: 0,
        url: '',
        expirationDate: '',
    });

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const { product, originalPrice, actualPrice, url, promotionCode, expirationDate } = formData;

        let data = {
            approvedStatus: false,
            product,
            originalPrice,
            actualPrice,
            url,
            promotionCode,
            expirationDate: Date.parse(expirationDate),
            createAt: '2020-06-25T00:00:00.000+0000',
            ownerId: 1,
            subCategory: {
                id: 1,
                subCategory: 'Desktop',
                category: {
                    id: 1,
                    category: 'Computador'
                }
            }
        }

        const response = await api.post('/promo/create', data).catch(() => {
            setAlertMessage('erro')
        });
        response && response.status === 200 ? setAlertMessage('cadastrado') : setAlertMessage('erro')

        setTimeout(() => {history.push('/')}, 1000);
    }
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                {alertMessage === 'cadastrado' ? (
                    <div className="alert alert-success" role="alert">
                        Promoção Cadastrada
                    </div>)
                    : ""
                }
                {alertMessage === 'erro' ? (
                    <div className="alert alert-danger" role="alert">
                        Ocorreu um erro durante a solicitação
                    </div>)
                    : ""
                }
                {alertMessage === 'deletado' ? (
                    <div className="alert alert-warning" role="alert">
                        Promoção Excluída
                    </div>)
                    : ""
                }
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">Cadastrar Promoção</h1>
                        <div className="card shadow">
                            <form onSubmit={handleSubmit} className="form">
                                <div className="form-group">
                                    <label htmlFor="product">Produto</label>
                                    <input type="text" className="form-control" placeholder="Nome do Produto" name="product" id="product" onChange={handleInputChange} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label htmlFor="originalPrice">Preço Original</label>
                                        <input type="text" className="form-control" placeholder="9999,99" name="originalPrice" id="originalPrice" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="actualPrice">Preço Atual</label>
                                        <input type="text" className="form-control" placeholder="9999,99" name="actualPrice" id="actualPrice" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="url">Endereço</label>
                                    <input type="text" className="form-control" placeholder="http://example.com/item/product" name="url" id="url" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="promotionCode">Código de Promoção</label>
                                    <input type="text" className="form-control" placeholder="XXXXX" id="promotionCode" name="promotionCode" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="expirationDate">Expira em</label>
                                    <input type="text" className="form-control" placeholder="dd/mm/aaaa" name="expirationDate" id="expirationDate" onChange={handleInputChange} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label htmlFor="category">Categoria</label>
                                        <select name="category" id="category" className="form-control">
                                            <option value={0}>Computador</option>
                                            <option value={1}>Televisores</option>
                                        </select>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="subCategory">Sub-Categoria</label>
                                        <select name="subCategory" id="subCategory" className="form-control">
                                            <option value={0}>Desktop</option>
                                            <option value={1}>Notebook</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Cadastrar Promoção</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreatePromotion;