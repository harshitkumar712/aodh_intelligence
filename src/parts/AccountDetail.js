import React from "react";
import styled from "styled-components";
import profile from "../assets/images/profile.png";
import {device} from '../constants/mediaQueries';
// import vector1 from "../assets/images/illustrations/vector1.svg";
// import vector2 from "../assets/images/illustrations/vector2.svg";
// import vector3 from "../assets/images/illustrations/vector3.svg";

const AccountDetail = () => {
	return (
		<Container>
			<Wrapper>
				<Profile>
					<h3>Account</h3>
					<img src={profile} alt="profile" />
				</Profile>
				<Details>
					<table>
						<tbody>
							<tr>
								<td>Name</td>
								<td>Rahul Agarwal</td>
							</tr>
							<tr>
								<td>Profile Photo</td>
								<td>true</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>Male</td>
							</tr>
							<tr>
								<td>Date of birth</td>
								<td>01/12/1998</td>
							</tr>
							<tr>
								<td>Mobile</td>
								<td>9876543210</td>
							</tr>
							<tr>
								<td>Email Id</td>
								<td>abc@gmail.com</td>
							</tr>
							<tr>
								<td>Qualification</td>
								<td>Yes</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>Mumbai</td>
							</tr>
						</tbody>
					</table>
				</Details>
			</Wrapper>
		{/* illustration removed @ 14aug*/}
			{/* <img className="vector1" src={vector1} alt="vector1" /> */}
			{/* <img className="vector2" src={vector2} alt="vector2" /> */}
			{/* <img className="vector3" src={vector3} alt="vector3" /> */}
			
		</Container>
	);
};
const Container = styled.div`
	font-family: "Josefin Sans", sans-serif;
	width: 75%;
	position: relative;
	/*.vector1 {
		position: absolute;
		overflow: hidden;
		bottom: 60px;
		right: 30px;
	}
	.vector2 {
		position: absolute;
		overflow: hidden;
		left: 50%;
		top: 40%;
	}
	.vector3 {
		position: absolute;
		overflow: hidden;
		bottom: 10%;
		left: 0;
	}*/
	 @media ${device.sm} {
		width:100%;
		}
`;
const Details = styled.div`
	background: linear-gradient(
		180deg,
		rgba(94, 126, 94, 0.72) 0%,
		rgba(122, 187, 122, 0.345) 99.99%,
		rgba(122, 187, 122, 0) 100%
	);
	border: 1px solid #000000;
	border-radius: 15px;
	font-family: "Josefin Sans", sans-serif;
	padding: 1rem;
	margin: 1rem;

	table{
		width:100%;
	}
	td {
		padding: 0.5rem;
	}
	@media ${device.sm} {
		background: transparent;
		border:none;
		table td:nth-child(2){
			color:#003300;
		}
	}
`;
const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #0cb2b2;
	padding: 1rem;
	margin-left: 2rem;
	img {
		padding: 1rem;
	}
	@media ${device.sm} {
		margin:0;
	}
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	
	@media ${device.sm} {
		display:flex;
		flex-direction:column;
		justify-content:center;
	}
`;
export default AccountDetail;
