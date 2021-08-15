import React from "react";
import styled from 'styled-components';
import loginBackground from '../../assets/images/login-page-bg.png';
import LoginBar from '../../parts/LoginBar';
import {device} from '..//../constants/mediaQueries';

const LoginPage = () => {
	return (
		<Container>
		<Wrapper><Background></Background><LoginBar/></Wrapper></Container>
		)
};

const Container = styled.div`
	background: #fff;
	
	height:92vh;
	width:100%;

`
const Wrapper = styled.div`
	
	display:flex;
	height:100%;
	width:100%;
	
`
const Background = styled.div`
	background-image:url(${loginBackground});
	background-position:center;
	background-size:cover;
	background-repeat:no-repeat;
	width:45%;
	height:100%;
	@media ${device.sm} {
		display:none;
	}
	
`

export default LoginPage;
