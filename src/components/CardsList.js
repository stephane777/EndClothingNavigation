import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsList = ({ category, dropDownImages, column }) => {
	let cards = [];
	for (const prop in dropDownImages) {
		if (/dropdown_image_title\d/gi.test(prop)) cards.push(dropDownImages[prop]);
	}
	//console.log(`cards.length: ${cards.length}`);
	return (
		<CardsWrapper>
			{cards.map((card, i) => (
				<Card
					imgUrl={dropDownImages[`dropdown_image_url${i + 1}`]}
					imgLink={dropDownImages[`dropdown_image_link${i + 1}`]}
					title={dropDownImages[`dropdown_image_title${i + 1}`]}
					stretch={cards.length}
					key={i}
				/>
			))}
		</CardsWrapper>
	);
};

export default CardsList;

const CardsWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-flow: column wrap;
`;
