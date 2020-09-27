import React from "react";
import styled from "styled-components";

const ListItem = ({ category, column1, column2, column3, column }) => {
	const list =
		column === 1
			? column1
			: column === 2
			? column2
			: column === 3
			? column3
			: null;
	const filteredList = list.filter(
		(item) =>
			!/Column 1 header|Column 2 header|Column 3 header|View all/gi.test(
				item.name
			)
	);
	const listMax =
		category === "Brands"
			? filteredList.slice(0, 36)
			: filteredList.slice(0, 12);
	return (
		<React.Fragment>
			{column === 1 && (
				<HeaderList>
					<SpanItem>View all {category}</SpanItem>
				</HeaderList>
			)}
			<StyledUl>
				{/* <StyledLi category={category}>View all {category}</StyledLi> */}
				{listMax.map((item) => (
					<StyledLi category={category} key={item.id}>
						<LinkItem href={`https://www.endclothing.com/gb/${item.url_path}`}>
							{/Column \d link/gi.test(item.name)
								? item.custom_name
								: item.name}
						</LinkItem>
					</StyledLi>
				))}
			</StyledUl>
		</React.Fragment>
	);
};
export default ListItem;

const LinkItem = styled.a`
	text-decoration: none;
	color: #333;
`;
const SpanItem = styled.span`
	text-decoration: underline;
	font-weight: bold;
	font-size: 13px;
	padding: 0 4px;
	letter-spacing: 1.3px;
`;
const HeaderList = styled.div`
	height: 15px;
	padding: 10px 0;
`;
const StyledUl = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-flow: column wrap;
	text-align: left;
	list-style: none;
`;
const StyledLi = styled.li`
	padding: 6px 4px;
	font-family: "proximanova-semibold";
	letter-spacing: 1.3px;
	font-size: 13px;
	width: ${(props) => (props.category == "Brands" ? "33%" : "100%")};
`;
