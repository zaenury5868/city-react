import React, {Component} from 'react';
import Terbaru from '../Terbaru';
import {InfoPelanggan} from '../konteks';

class News extends Component{
	render(){
		return (
			<InfoPelanggan>
				{data => {
					return data.news.map(item => {
						return <Terbaru key={item.id} item={item}/>;
					});
				}}
			</InfoPelanggan>
		);
	}
}

export default News;