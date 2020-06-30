import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import { FaEdit, FaTrashAlt } from 'react-icons/fa'


function AdminManagePromotions() {
    const [promotions, setPromotions] = useState([]);
    const [promotionStatus, setPromotionStatus] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        async function getPromotion() {
            setAlertMessage('')
            const response = await api.get(`/promo/list?approvedStatus=${promotionStatus}`).catch(() => {
                setAlertMessage('erro')
            });

            response ? setPromotions(response.data) : setPromotions([]);
        }

        getPromotion();
    }, [promotionStatus]);

    async function handleApprove(key) {
        setAlertMessage('')
        let approvedPromotion = promotions[key];

        approvedPromotion.approvedStatus = true;

        const response = await api.put('/promo/update', approvedPromotion).catch(() => {
            setAlertMessage('erro');
        });

        promotions.splice(key, 1)
        setPromotions([...promotions]);

        response && response.status === 200 ? setAlertMessage('aprovado') : setAlertMessage('erro');
    }

    function handleSelectPromotionStatus(event) {
        setAlertMessage('')
        const value = event.target.value;
        setPromotionStatus(value);
    }

    function handleEditPromotion(key) {
        setAlertMessage('')
        localStorage.setItem('promotion', JSON.stringify(promotions[key]));
        console.log('Editar', promotions[key])
    }

    async function handleDeletePromotion(key) {
        setAlertMessage('')
        let promotion = promotions[key];

        const response = await api.delete(`/promo/${promotion.id}`).catch(() => {
            setAlertMessage('erro')
        })

        promotions.splice(key, 1)
        setPromotions([...promotions]);


        response && response.status === 200 ? setAlertMessage('deletado') : setAlertMessage('erro');

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <>
            <Navbar />
            <div className="container mt-2">
                {alertMessage === 'aprovado' ? (
                    <div className="alert alert-success" role="alert">
                        Promoção Aprovada
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
            </div>
            <div className="promo-container">
                <h1>Gerenciamento de Promoções</h1>
                <div className="form-group">
                    <label htmlFor="promotion-status">
                        <select className="form-control" name="promotion-status" id="promotion-status" onChange={handleSelectPromotionStatus}>
                            <option value={0}>Não Aprovados</option>
                            <option value={1}>Aprovados</option>
                        </select>
                    </label>
                </div>
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
                                        <div className="buttons">
                                            <a href={item.url} className="btn btn-outline-secondary">Acessar oferta!</a>
                                            {
                                                item.approvedStatus ?
                                                    (<div className="buttons-approved">
                                                        <Link to="/admin/editPromotion">
                                                            <button className="btn btn-outline-primary" onClick={() => handleEditPromotion(key)}><FaEdit /> Editar </button>
                                                        </Link>
                                                        <button className="btn btn-outline-danger" onClick={() => handleDeletePromotion(key)}><FaTrashAlt /> Excluir </button>
                                                    </div>)
                                                    :
                                                    (<button onClick={() => handleApprove(key)} className="btn btn-outline-success mt-2">Aprovar</button>)
                                            }
                                        </div>
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

export default AdminManagePromotions;