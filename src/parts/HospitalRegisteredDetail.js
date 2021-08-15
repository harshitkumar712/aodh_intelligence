import React from "react";
import styled from "styled-components";
import HospitalRow from '../components/HospitalRow';
import {device} from '../constants/mediaQueries';


const HospitalRegisteredDetail=()=>{
	return(
		<Container>
			<Back>
				<i className="fas fa-chevron-left"></i>
			</Back>
			<Header>
				<h3>unregistered hospitals</h3>
			</Header>
			<Wrapper>
<thead>
<tr>
<th>Initial date</th>
<th>Hospital name</th>
<th>Telephone</th>
<th>Address</th>
<th>Request Registration</th>
<th>Status</th>
<th>Comments</th>
<th>Access</th>
</tr>
</thead>
<tbody>
	<HospitalRow/>
	<HospitalRow/>
	<HospitalRow/>
	<HospitalRow/>
	<HospitalRow/>
	<HospitalRow/>	 
</tbody>
</Wrapper>
		</Container>
		)
}

const Container = styled.div`
	font-family: "Josefin Sans", sans-serif;
	width: 75%;
	overflow-x:auto;
	@media ${device.sm} {
		width:100%;
		}
`;
const Wrapper = styled.table`
	width:95%;

	text-align:center;
	font-family: "Lato", sans-serif;
	font-weight:700;

`
const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform:uppercase;
	margin: 1rem;
`;
const Back = styled.button`
	border: none;
	background: #fff;

	font-size: 1.2rem;

	margin: 1rem;
	float: left;
	color: #1d1d1d;
	cursor: pointer;
`;
export default HospitalRegisteredDetail;