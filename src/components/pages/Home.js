import React, { Component } from 'react';
import { InfoPelanggan } from '../konteks';
import Info from '../Info';

class Home extends Component {
    render() {
        return ( 
            <div className="container">
                <div className="row mt-5">
                <InfoPelanggan>
                    {data => {
                        return data.info.map(item => {
                            return <Info key={item.id} item={item} />;
                        });
                        }
                    }
                </InfoPelanggan>
                </div>
            </div>
        );
    }
}

export default Home;