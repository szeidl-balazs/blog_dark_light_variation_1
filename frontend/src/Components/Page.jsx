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
			<div className="dark-text-cont">
				<h5>Science</h5>
				<h5>Magazine</h5>
				<h5>11.13.2018</h5>
				<p>Want to master your professional and social networks tp maximize recognition? 
          Want to learn how to build productive team that create lasting impact?
          In this new book, The formula: The universal laws of Success, 
          András-László Barabási translates almost a decade of scholarly research on the science to success into lively...
        </p>
			</div>
			<a href="{#}"><h6>READ MORE</h6></a>
			<div className="light-text-cont">
				<h5>Science</h5>
				<h5>Magazine</h5>
				<h5>11.13.2018</h5>
				<p>Want to master your professional and social networks tp maximize recognition? 
          Want to learn how to build productive team that create lasting impact?
          In this new book, The formula: The universal laws of Success, 
          András-László Barabási translates almost a decade of scholarly research on the science to success into lively...
        </p>
			</div>
			<a href="{#}"><h6>READ MORE</h6></a>
	

		</div>
	);
}

export default Page;