import React, { Component } from 'react'
import {InfoPelanggan} from '../components/konteks';
import {Link} from 'react-router-dom';

class Terbaru extends Component {
    render() {
        const {
            id,
            newsTitle,
            newsText
        } = this.props.item;
        return (
            <InfoPelanggan>
                {data => (
                    <div className="card container mt-2 mb-3 p-5">
                        <div className="card-body">
                            <h5 key={id} className="card-title">
                                {newsTitle}
                            </h5>
                            <p className="card-text">{newsText}</p>
                            <Link to="/#" className="card-link">Selengkapnya</Link>
                        </div>
                    </div>
                )}
            </InfoPelanggan>
        );
    }
}
export default Terbaru;
