import React from "react";
import data from "../data";
import { formatNavDataForDropDown } from "../utils";
import styled from "styled-components";
import ListItem from "./ListItem";
import CardsList from "./CardsList";

// Remove Features from data
const filterInitialData = (data) => {
	const cleaningMenu = {
		navCatagories: data.navCatagories.filter(
			(item) => !["Features", "Launches"].includes(item.category_path)
		),
	};
	const tempData = formatNavDataForDropDown(cleaningMenu);
	return tempData.map((item) => {
		if (item.category.toLowerCase() === "gifts") {
			return {
				...item,
				column3: [],
			};
		} else {
			return item;
		}
	});
};

const Nav = () => {
	// data are static. The initial value will be assigned only on the initial render;
	const [navData, setNavData] = React.useState(() => filterInitialData(data));
	const [hoveredMenu, setHoveredMenu] = React.useState(false);
	const [hoveredDropdown, setHoveredDropdown] = React.useState(false);
	const [dataForItemHovered, setDataForItemHovered] = React.useState("");
	// console.log(navData);
	// console.log(dataForItemHovered);
	const makeHandleInOutMenu = (action) => (event) => {
		// console.log(e.target.innerText);
		action
			? sliceNavDataHovered(event.target.innerText)
			: hoveredDropdown && sliceNavDataHovered("");
		setHoveredMenu(action);
	};
	const makeHandleInOutDropdown = (action) => () => {
		if (!action) sliceNavDataHovered("");
		setHoveredDropdown(action);
	};
	const sliceNavDataHovered = (itemHovered) => {
		const dropdownData1 = navData.find(
			(item) => item.category.toUpperCase() === itemHovered
		);
		setDataForItemHovered(dropdownData1);
	};
	const itemMenu = (list) =>
		list.map((item, i) => (
			<NavSpan
				key={i}
				onMouseLeave={makeHandleInOutMenu(false)}
				onMouseEnter={makeHandleInOutMenu(true)}
			>
				<NavA>{item.category}</NavA>
			</NavSpan>
		));

	// console.log(Object.keys(navData.navCategories));

	// console.log(navData.navCatagories);
	return (
		<StyledNav>
			{itemMenu(navData)}
			{(hoveredMenu || hoveredDropdown) && (
				<DropDown
					onMouseEnter={makeHandleInOutDropdown(true)}
					onMouseLeave={makeHandleInOutDropdown(false)}
				>
					<DropdownInnerWrapper>
						<ColumnWrapper
							column={1}
							size={dataForItemHovered.column2.length === 0 ? "75%" : "25%"}
						>
							<ListItem {...dataForItemHovered} column={1} />
						</ColumnWrapper>
						{dataForItemHovered.column2.length > 0 && (
							<ColumnWrapper column={2}>
								<ListItem {...dataForItemHovered} column={2} />
							</ColumnWrapper>
						)}
						{dataForItemHovered.column2.length > 0 && (
							<ColumnWrapper
								column={3}
								size={dataForItemHovered.column3.length === 0 ? "50%" : "25%"}
							>
								{dataForItemHovered.column3.length > 0 && (
									<ListItem {...dataForItemHovered} column={3} />
								)}
								{dataForItemHovered.column3.length === 0 && (
									<CardsList {...dataForItemHovered} />
								)}
							</ColumnWrapper>
						)}
						{(dataForItemHovered.column3.length > 0 ||
							dataForItemHovered.column2.length === 0) && (
							<ColumnWrapper column={4}>
								<CardsList {...dataForItemHovered} />
							</ColumnWrapper>
						)}
					</DropdownInnerWrapper>
				</DropDown>
			)}

			{/* <DropDown
				onMouseEnter={makeHandleInOutDropdown(true)}
				onMouseLeave={makeHandleInOutDropdown(false)}
			>
				<DropdownInnerWrapper>
					<ColumnWrapper
						color="tomato"
						column={1}
						size={dataForItemHovered.column2.length === 0 ? "75%" : "25%"}
					></ColumnWrapper>
					{dataForItemHovered.column2.length > 0 && (
						<ColumnWrapper color="cyan" column={2}></ColumnWrapper>
					)}
					{dataForItemHovered.column2.length > 0 && (
						<ColumnWrapper
							color="Violet"
							column={3}
							size={dataForItemHovered.column3.length === 0 ? "50%" : "25%"}
						></ColumnWrapper>
					)}
					{(dataForItemHovered.column3.length > 0 ||
						dataForItemHovered.column2.length === 0) && (
						<ColumnWrapper color="gray" column={4}></ColumnWrapper>
					)}
				</DropdownInnerWrapper>
			</DropDown> */}
		</StyledNav>
	);
};
export default Nav;

const ColumnWrapper = styled.div`
	width: ${(props) => (props.size ? props.size : "25%")};
	height: 100%;
	border-left: ${(props) => (props.column === 2 ? "1px solid #eee" : "0")};
	background-color: ${(props) => props.color};
`;

const DropdownInnerWrapper = styled.div`
	position: relative;
	width: 70%;
	max-width: 895px;
	height: 95%;
	margin: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: no-wrap;
`;

const DropDown = styled.div`
	position: absolute;
	padding-top: 10px;
	top: 20px;
	left: 0;
	width: 100%;
	height: 390px;
	display: flex;
	justify-content: center;
`;

const NavA = styled.a`
	margin: 0px 0px 4px;
	padding: 6px 16px 4px;
	font-family: proximanova-semibold;
	letter-spacing: 1.3px;
	font-size: 13px;
	&:hover {
		color: #666666;
		cursor: pointer;
	}
`;
const NavSpan = styled.span`
	padding-bottom: 2px;
	text-transform: uppercase;
	color: #000;
`;

const StyledNav = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 20px;
`;
