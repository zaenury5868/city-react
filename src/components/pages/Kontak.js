import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Kontak extends Component{
	render(){
		return (
			<section className="my-5 py-5">
				<div className="container">
					<div className="well well-sm">
						<h3><strong>Lokasi kami</strong></h3>
					</div>
				
					<div class="row">
						<div className="col-md-7">
							<iframe title ="map" src="https://www.google.com/maps/d/embed?mid=1kZiBvuG--7C75VuUq0yz5uHWcpGYTmFt" style={{
								border: '0',
								width: '100%',
								height: '315px',
								frameborder: '0'
							}} allowFullScreen />
						</div>
						<div className="col-md-5">
							<h4><strong>Kontak Kami</strong></h4>
							<form action="">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Nama"/>
								</div>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email"/>
								</div>
								<div className="form-group">
									<input type="tel" className="form-control" placeholder="No Telepon"/>
								</div>
								<textarea className="form-control" cols="30" rows="3" placeholder="Pesan" />
								<Link className="btn btn-outline-primary text-uppercase mt-1">
									<i className="fa fa-paper-plane-o" aria-hidden="true"/>
									<i className="fab fa-telegram-plane" />&nbsp;Kirim
								</Link>
							</form>
						</div>
					</div>
				</div>	
			</section>
		);
	}
}

export default Kontak;