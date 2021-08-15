import React from 'react';
import Sidebar from '../../parts/Sidebar';
// import Navbar from '../../parts/Navbar';
import RegistrationDetail from '../../parts/RegistrationDetail';

import styled from "styled-components";

const RegistrationPage=()=>{
	return(
		<Container>
			{/* <Navbar/> */}
		<Wrapper>
		<Sidebar indexValue={1}/>
			<RegistrationDetail/>
			</Wrapper>
		</Container>
		
		)
}
const Container = styled.div`
	height:100%;
	width:100%;
`
const Wrapper=styled.div`

height:100%;
width:100%;
	display:flex;
`
export default RegistrationPage;