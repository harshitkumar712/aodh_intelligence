import React from "react";
import logo from "../assets/images/logo1.png";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import { withRouter,Link } from "react-router-dom";
import {device} from '../constants/mediaQueries';
import profile from "../assets/images/profile.png";

const Navbar = (props) => {
	return (
		<Container>
			<Wrapper>
				<LogoWrapper>
					<img className="logo" src={logo} alt="logo" />
				</LogoWrapper>
				<hr />
				{props.location.pathname === "/hospitals/registered" && (
					<SearchBox />
				)}
				{props.location.pathname==="/account"&&(
					<img src={profile} className="profile" alt="profile-avatar"/>
					)}
			</Wrapper>
			<StatusBar>
				{props.location.pathname !== "/" && (
					<>
						<i onClick={props.toggleSidebar} className="fas fa-bars bars"></i>
						<i className="far fa-bell"></i>
						<Link to="/"><i className="fas fa-sign-out-alt"></i></Link>
					</>
				)}
			</StatusBar>
		</Container>
	);
};
const Container = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 15vh;
	width: 100%;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	background: #fff;
	z-index: 100;
`;
const Wrapper = styled.div`
	display: flex;
	background: #fff;
	justify-content: space-between;
	align-items: center;
	.profile{
		width:3rem;
		height:auto;
		margin-right:1rem;
	}
`;
const StatusBar = styled.div`
	background: #003300;
	min-height: 30px;
	width: 100%;
	margin-bottom: 1px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	i {
		cursor: pointer;
		color: white;
		margin: 0 1rem;
	}
	.bars {
		display:none;
		margin-right: auto;
	}
	@media ${device.xs} {
		.bars{
			display:block;
		}
	}
`;
const LogoWrapper = styled.div`
	.logo {
		width: 100px;
		height: auto;
		object-fit: cover;
	}
`;
export default withRouter(Navbar);
