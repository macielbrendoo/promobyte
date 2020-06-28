import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { FaCoins, FaSearch, FaPlus } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand font-weight-bold"><FaCoins size={25} color="#000" /> PromoByte</span>
        </Link>
        <form className="form-inline ml-auto mr-3">
          <div className="input-group">
            <input className="form-control" type="text" name="search" id="searchbar" placeholder="Procure uma ofera" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary"><FaSearch size={16} /></button>
            </div>
          </div>
        </form>
        <Link to="/createpromotion">
          <span type="button" className="btn btn-outline-success mr-1"><FaPlus/> Sugerir Oferta</span>
        </Link>
        <Link to="/login">
          <span type="button" className="btn btn-success">Entrar</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
