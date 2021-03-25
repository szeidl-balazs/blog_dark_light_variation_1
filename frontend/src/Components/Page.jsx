import React from 'react';
import './style.css';
import MenuComp from './MenuComp';

const Page = () => {

	return (
		<div className="page-main-conatiner">
			<div className="title-menu-cont">
				<h4>MEDIA APPEREANCES</h4>
				<MenuComp />
			</div>			
		</div>
	);
}

export default Page;