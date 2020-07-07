import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

import api from '../../services/api';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function AdminLogs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        async function loadLogs() {
            const response = await api.get('/logs/');
            setLogs(response.data);
        }

        loadLogs();
    }, []);
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>LOGS</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Operação Realizada</th>
                            <th>Promoção Anterior</th>
                            <th>Promoção Nova</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((item, key) => (
                            <tr key={key}>
                                <td>{item.operation}</td>
                                <td>
                                    <label>
                                        <input type="checkbox" />
                                        <div className="table-content">
                                            <span className="hidden">
                                                {
                                                    JSON.stringify(item.oldPromotionLog)
                                                }
                                            </span>
                                        </div>
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="checkbox" />
                                        <div className="table-content">
                                            <span className="hidden">
                                                {item.operation === 'DELETE' ? '' : JSON.stringify(item.newPromotionLog)}
                                            </span>
                                        </div>
                                    </label>
                                </td>
                                {console.log(item)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminLogs;