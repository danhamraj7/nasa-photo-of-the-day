import React from "react";

const Header = props => {
	return (
		<div>
			<h1 className="title"> {props.title}</h1>
			<p className="date">
				Date:<span>{props.date}</span>
			</p>
		</div>
	);
};

export default Header;
