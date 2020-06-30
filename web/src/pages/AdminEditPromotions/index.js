import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function AdminEditPromotions() {
    const [promotion, setPromotion] = useState({});
    
    useEffect(() => {
        async function loadPromotion() {
            let storagePromotion = JSON.parse(await localStorage.getItem('promotion'));
            
            setPromotion(storagePromotion);
        }
        loadPromotion();
    }, [ ]);
    
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <h1>Editar Promoção</h1>
                {console.log(promotion)}
            </div>
        </>
    );
}

export default AdminEditPromotions;