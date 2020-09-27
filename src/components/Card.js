import React from "react";
import styled from "styled-components";

const Card = ({ imgUrl, imgLink, title, stretch }) => {
	//console.log(`stretch from Card render :${stretch}`);
	return (
		<CardLink
			stretch={stretch}
			href={`https://www.endclothing.com/gb${imgLink}`}
		>
			<Image src={imgUrl} />
			<CardSpan>{title}</CardSpan>
		</CardLink>
	);
};
export default Card;

const CardLink = styled.a`
	font-family: proximanova-semibold;
	width: ${(props) => (props.stretch === 2 ? "100%" : "50%")};
	text-align: center;
	text-decoration: none;
	color: black;
`;
const Image = styled.img`
	width: 87%;
	padding: 12px 15px;
`;
const CardSpan = styled.span`
	text-transform: uppercase;
	font-size: 13px;
`;
