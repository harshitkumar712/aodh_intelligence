import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../parts/Sidebar';
// import Navbar from '../../parts/Navbar';
import HospitalRegisteredDetail from '../../parts/HospitalRegisteredDetail';


const Registered=()=>{
	return(
		<Container>
			{/* <Navbar/> */}
		<Wrapper>
		<Sidebar indexValue={2}/>
			<HospitalRegisteredDetail/>
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
export default Registered;