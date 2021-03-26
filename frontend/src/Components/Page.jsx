import React from 'react';
import './style.css';
import MenuComp from './MenuComp';
import VideoPlay from './VideoPlay';

const Page = () => {

	return (
		<div className="page-main-conatiner">
			<div className="title-menu-cont">
				<h4>MEDIA APPEREANCES</h4>
					<div className="menu-cont">
						<MenuComp />
					</div>				
			</div>
			
			<div className="text-main-cont">

				<div className="text-cont">
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
					<h6 className="under-title"><a href="{#}">READ MORE</a></h6>
				</div>


				<div className="text-cont">
					<div className="light-text-cont">
						<h5>Nature</h5>				
						<h5>27.11.2018</h5>
						<p>
		          Originally printed by the National Academy of Science as a poster to accompany the publication 
		          of a research paper on how deseases connect, it was subsequently reproduced by the New York Times
		          and included in the Mapping It Out: Atlas of Contemporary Cartographies exhibition at the Serpentine
							Gallery in London...
		        </p>
					</div>
					<h6 className="under-title"><a href="{#}">READ MORE</a></h6>
				</div>
	
				<div className="text-cont">
					<div className="dark-text-cont">

						<div className="videoplay-cont">
							<VideoPlay />
						</div>

						<h5 className="video-title">Lecture at NYU</h5>

						</div>
						<h6 className="under-title"><a href="{#}">WATCH</a></h6>
				</div>

			</div>

		</div>
	);
}

export default Page;