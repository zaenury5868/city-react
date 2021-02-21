import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light" style={{background: 'var(--mainBlue)'}}>
		  <Link to="/#" className="navbar-brand ml-5" href="#">
		  	<img src={logo} alt="logo" style={{ width:'35px'}}/>
		  </Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span>
		    	<i className="fas fa-bars" style={{color: '#fff'}}></i>
		    </span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav m-auto">
		      <li className="nav-item active">
		        <Link className="nav-link text-white text-uppercase ml-5" to="/"><i className="fas fa-home"></i>beranda&nbsp; <span className="sr-only">(current)</span></Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link text-white text-uppercase ml-5" to="/news">terbaru</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link text-white text-uppercase ml-5" to="/kontak">kontak kami</Link>
		      </li>
		    </ul>
		    <form className="form-inline my-2 my-lg-0">
		      <input className="form-control mr-sm-2" type="search" placeholder="Cari" aria-label="Search"/>
		      <button className="btn text-white my-2 my-sm-0" type="submit">Cari</button>
		    </form>
		  </div>
		</nav>
	);
}

export default Navbar;