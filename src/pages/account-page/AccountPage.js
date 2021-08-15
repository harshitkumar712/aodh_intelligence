
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../parts/Sidebar';
// import Navbar from '../../parts/Navbar';
import AccountDetail from '../../parts/AccountDetail';

const AccountPage=()=>{
	return(
		<Container>
		{/* <Navbar/> */}
		<Wrapper>
		<Sidebar indexValue={0}/>
			<AccountDetail/>
			</Wrapper>
		</Container>
		)
}

const Container=styled.div`
	background: #fff;
	
	/*height:92vh;*/
	height:100%;
	width:100%;
`
const Wrapper=styled.div`

height:100%;
width:100%;
	display:flex;
`
export default AccountPage;