import React from "react";
import Nav from "./components/Nav";
import Logo from "./images/Logo";
import Search from "./images/Search";

import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";

function App() {
	// console.log("render App");
	return (
		<StyledApp>
			<BannerLink href="https://www.endclothing.com/gb/latest-products/new-this-week">
				<BannerSpan>New In: PLEASURES | RICK OWENS | STONE ISLAND</BannerSpan>
			</BannerLink>
			<Header>
				<ShippingContainer>
					<ShippingButton>
						<ShippingFlag />
						<ShippingSpan>United Kingdom</ShippingSpan>
					</ShippingButton>
					<LoginUl>
						<LoginLi>
							<LoginSpan>help</LoginSpan>
						</LoginLi>
						<LoginLi>
							<LoginSpan>log in</LoginSpan>
						</LoginLi>
					</LoginUl>
				</ShippingContainer>
				<BrandLogo>
					<Logo />
					<SearchNBagContainer>
						<SearchNBagButton>
							<Search />
						</SearchNBagButton>
						<SearchNBagButton>
							<BiShoppingBag size={30} />
						</SearchNBagButton>
					</SearchNBagContainer>
				</BrandLogo>
				<Nav />
			</Header>
		</StyledApp>
	);
}

const SearchNBagContainer = styled.div`
	position: absolute;
	top: 6px;
	right: 0;
	display: flex;
`;
const SearchNBagButton = styled.button`
	position: relative;
	top: 0;
	left: 0;
	width: 36px;
	height: 36px;
	background: none;
	border: none;
`;

const LoginSpan = styled.span`
	text-transform: uppercase;
`;
const LoginLi = styled.li`
	margin-left: 18px;
	line-height: 30px;
	letter-spacing: 1.2px;
	font-size: 12px;
`;
const LoginUl = styled.ul`
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
	text-align: right;
	list-style: none;
`;
const ShippingContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	height: 20px;
	background-color: #fff;
`;
const ShippingButton = styled.button`
	display: flex;
	align-items: center;
	height: 25px;
	margin-right: auto;
	padding: 0px;
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
`;
const ShippingFlag = styled.div`
	display: inline-block;
	width: 50px;
	height: 36px;
	margin: -4px -5px 0px -4px;
	vertical-align: bottom;
	background: url(https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/css/flags_sprite.jpg) -222px -162px
		no-repeat;
	transform: scale(0.45);
	content: "";
`;

const ShippingSpan = styled.span`
	font-size: 12px;
	line-height: 24px;
	letter-spacing: 0.3px;
	font-family: proximanova-regular;
	margin: -4px -5px 0px -4px;
`;
const Header = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 97px;
	border-bottom: 1px solid rgb(242, 242, 242);
`;
const StyledApp = styled.div`
	background: #fff;
	width: 100%;
	display: flex;
	position: relative;
	top: 0px;
	left: 0px;
	flex-direction: column;
	min-height: 100vh;
	z-index: 30;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 27px 0px;
	will-change: transform;
`;
const BannerLink = styled.a`
	background: rgb(242, 242, 242);
	display: flex;
	justify-content: center;
	padding: 7px;
	text-decoration: none;
	cursor: pointer;
	font-weight: 400;
`;
const BannerSpan = styled.span`
	font-size: 12px;
	color: #666666;
	letter-spacing: 0.08rem;
	text-transform: uppercase;
`;
const BrandLogo = styled(ShippingContainer)`
	height: 50px;
	align-items: flex-start;
`;
export default App;
