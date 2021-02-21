import React, {Component} from 'react';
import {InfoPelanggan, InfoProvider} from '../konteks';
import styled from 'styled-components';
import Ulasans from '../Ulasans';
class Details extends Component{
	render(){
		return (
			<InfoPelanggan>
				{data => {
					const {
						id,
						headerTitle,
						headerSubTitle,
						headerText,
						img,
						title,
						maps,
						description
					} = data.detailInfo;

					return (
						<React.Fragment>
							<HeaderDetails className="container-fluid align-items-center">
								<h1 className="display-1 font-weight-bold">{headerTitle}</h1>
								<h4 className="display-5">{headerSubTitle}</h4>
								<p>{headerText}</p>
								<div className="container mt-5">
									<div className="row justify-content-center">
										<div className="col-2">
											<i className="fab fa-facebook-f"/>
										</div>
										<div className="col-2">
											<i className="fab fa-twitter"/>
										</div>
										<div className="col-2">
											<i className="fab fa-google-plus-g"/>
										</div>
										<div className="col-2">
											<i className="fab fa-reddit"/>
										</div>
										<div className="col-2">
											<i className="fab fa-whatsapp"/>
										</div>
										<div className="col-2">
											<i className="fab fa-facebook-messenger"/>
										</div>
									</div>
								</div>
							</HeaderDetails>
							<div className="container">
								<ul className="nav nav-tabs">
									<li className="nav-item">
										<a href="#aboutPlace" role="tab" data-toggle="tab" className="nav-link active">Tentang Travel</a>
									</li>
									<li className="nav-item">
										<a href="#reviews" role="tab" data-toggle="tab" className="nav-link">Ulasan</a>
									</li>
									<li className="nav-item">
										<a href="#map" role="tab" data-toggle="tab" className="nav-link">Map</a>
									</li>
								</ul>
								<div className="tab-content mb-5">
									<div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
										<h2 className="mb-3">{title}</h2>
										<p>{description}</p>
										<img src={img} alt={title} className="img-thumbnail img-fluid"/>
									</div>
									<div className="tab-pane" id="reviews" role="tabpanel">
											<Ulasans/>
										</div>
										<div className="tab-pane" id="map" role="tabpanel">
											<iframe src={maps} style={{border: '0', height: '28.125rem', width: '100%', frameborder: '0'}}></iframe>
										</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</InfoPelanggan>
		);
	}
}

export default Details;

const HeaderDetails = styled.header`
	height: 100vh;
	text-transform:uppercase;
	color: var(--mainWhite);
	text-align: center;

	h1{
		padding-top: 10%;
		color: var(--mainDark);
	}

	h4{
		color: var(--mainDark);
	}
	
	p{
		padding-left: 10%;
		padding-right: 10%;
		margin-bottom: 10%;
		color: var(--mainDark);
	}

	i{
		font-size: 1.875rem;
		color: var(--mainDark);
	}
	i:hover{
		color: var(--mainBlue);
		cursor: pointer;
	}

	.nav-item {
		height: 18.75rem;
	}

	@media(max-width:760px){
		h1,h4{
			color: var(--mainDark);
		}
	}
`;