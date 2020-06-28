import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


function AdminNotApprovedPromotions() {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        async function getPromotion() {
            const response = await api.get('/promo/list?approvedStatus=0');

            setPromotions(response.data);
        }

        getPromotion();
    }, []);

    async function handleApprove(key) {
        let approvedPromotion = promotions[key];
        
        setPromotions([promotions.splice(key, 1)]);

        approvedPromotion.approvedStatus = true;
        await api.put('/promo/update', approvedPromotion)
    }

    return (
        <>
            <Navbar />
                    <div className="promo-container">
                        <h1>Promoções não aprovadas</h1>
                        <ul>
                            {
                                promotions.map((item, key) => (
                                    <li key={key} className="mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.product}</h5>
                                                <span className="card-subtitle mb-2 text-muted">{item.subCategory.subCategory} - </span>
                                                <span className="card-text original-price">Preço Original: {item.originalPrice}</span>
                                                <p className="card-text">Preço Atual: {item.actualPrice}</p>
                                                <p className="cad-text">Código: {item.promotionCode}</p>
                                                <p>Expira em: {Date(item.expirationDate)}</p>
                                                <a href={item.url} className="btn btn-outline-secondary">Acessar oferta!</a>
                                                <button onClick={() => handleApprove(key)} className="btn btn-outline-success ml-3">Aprovar</button>
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

export default AdminNotApprovedPromotions;