import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function AdminEditPromotions() {
    const history = useHistory();

    const [promotion, setPromotion] = useState({});

    useEffect(() => {
        async function loadPromotion() {
            let storagePromotion = JSON.parse(await localStorage.getItem('promotion'));

            setPromotion(storagePromotion);

        }
        loadPromotion();
    }, []);


    function handleInputChange(event) {
        const { name, value } = event.target;

        console.log(name,':',value);

        setPromotion({ ...promotion, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        await api.put('/promo/update', promotion)

        setTimeout(() => {history.push('/admin/promotions')}, 1000);
    }

    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">Editar Promoção</h1>
                        <div className="card shadow">
                            <form onSubmit={handleSubmit} className="form">
                                <div className="form-group">
                                    <label htmlFor="product">Produto</label>
                                    <input type="text" className="form-control" value={promotion.product} placeholder="Nome do Produto" name="product" id="product" onChange={handleInputChange} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label htmlFor="originalPrice">Preço Original</label>
                                        <input type="text" className="form-control" value={promotion.originalPrice} placeholder="9999,99" name="originalPrice" id="originalPrice" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="actualPrice">Preço Atual</label>
                                        <input type="text" className="form-control" value={promotion.actualPrice} placeholder="9999,99" name="actualPrice" id="actualPrice" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="url">Endereço</label>
                                    <input type="text" className="form-control" value={promotion.url} placeholder="http://example.com/item/product" name="url" id="url" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="promotionCode">Código de Promoção</label>
                                    <input type="text" className="form-control" value={promotion.promotionCode} placeholder="XXXXX" id="promotionCode" name="promotionCode" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="expirationDate">Expira em</label>
                                    <input type="text" className="form-control" value={promotion.expirationDate} placeholder="dd/mm/aaaa" name="expirationDate" id="expirationDate" onChange={handleInputChange} />
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
                                <button type="submit" className="btn btn-primary">Editar Promoção</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminEditPromotions;