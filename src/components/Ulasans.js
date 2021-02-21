import React, { Component } from 'react'
import {InfoPelanggan} from './konteks'
import Ulasan from './Ulasan'

class Ulasans extends Component {
    render() {
        return (
            <InfoPelanggan>
                {data => {
                    return data.reviews.map(person =>{
                        return <Ulasan key={person.id} person={person} />;
                    })
                }}
            </InfoPelanggan>
        );
    }
}
export default Ulasans;
