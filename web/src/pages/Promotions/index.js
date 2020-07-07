import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar';

import api from '../../services/api';

import './styles.css';

function Promotions() {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        async function loadPromotions() {
            const response = await api.get('/promo/list');

            setPromotions(response.data);
        }

        loadPromotions();
    }, []);

    return (
        <>
            <Navbar />
            <div className="promo-container">
                <ul>
                    {
                        promotions.map((item, key) => (
                            <li key={key}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.product}</h5>
                                        <span className="card-subtitle mb-2 text-muted">{item.subCategory.subCategory} - </span>
                                        <span className="card-text original-price">Preço Original: {item.originalPrice}</span>
                                        <p className="card-text">Preço Atual: {item.actualPrice}</p>
                                        <p className="cad-text">Código: {item.promotionCode}</p>
                                        <p>Expira em: {item.expirationDate}</p>
                                        <a href={item.url} className="btn btn-outline-success">Acessar oferta!</a>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </>
    );
}

export default Promotions;