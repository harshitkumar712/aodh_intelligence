import React,{useState} from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import loginBackground from '../assets/images/login-page-bg.png';
import Button from '../components/Button';
import  {device} from '../constants/mediaQueries';
import { withRouter } from 'react-router-dom';

const LoginBar =(props)=>{

	const [loginData,setLoginData]=useState({mobileNo:'',otp:''});
const{mobileNo,otp}=loginData;
 const [mobileErrors,setMobileErrors]=useState('');
 const [otpErrors,setOtpErrors]=useState('');

const handleChange=(e)=>{
		const {name,value}=e.target;
setLoginData({...loginData,[name]:value});
console.log(loginData);
	}

// const handleOtpValidation=({otp})=>{
// 	
// }
// const handlemobileValidation=({mobileNo})=>{
// 	let errors =[];
// 	let error;
// 	
// 	if(handleEmptyField(loginData)){
//        error ={message:'Fill all the fields'};
//        setErrors(errors.concat(error));
//        return false;
// 	}else if(username!=="123"||password!=="123"){
//        error ={message:'Wrong credentials'};
//        setErrors(errors.concat(error));
//        return false;
// 	}
//     
//     else{
//     	return true;
//     }
// 
// }
const handleMobileSubmit=(e)=>{
	
	e.preventDefault();
	if(!mobileNo.length){
		
      setMobileErrors('Mobile Number Required');
	}
	else if(mobileNo.length!==10){
		
		setMobileErrors('Mobile Number should be of 10 digits');
	}
	
	
}
const handleOtpSubmit=(e)=>{
	
	e.preventDefault();
	if(!mobileNo.length&&!otp.length){
		setMobileErrors('Mobile Number Required');
		setOtpErrors('Otp Required');
	}
	else if(!otp.length){
      setOtpErrors('Otp Required');
	}
	else{
		props.history.push("/account");
	}
}


const handleMobileFocus=()=>{
	setMobileErrors('');
}
const handleOtpFocus=()=>{
	setOtpErrors('');
}
	return(
		<Container>
		<Back><i className="fas fa-arrow-left"></i></Back>
<Header>
	<h3>Login with Mobile OTP</h3>
	<h4>Enter your registered Mobile Number</h4>
</Header>
<Form>
	<Input error={mobileErrors} label="Mobile Number" type="number" id="mobileNo" handleFocus={handleMobileFocus} handleChange={handleChange} value={mobileNo}/>
	<Error>{mobileErrors?<span>{mobileErrors}</span>:null}</Error>
	<Button handleSubmit={handleMobileSubmit} value="get otp"/>
	<Input error={otpErrors} label="Enter OTP" type="number" id="otp" handleChange={handleChange} handleFocus={handleOtpFocus} value={otp}/>
	<Error>{otpErrors?<span>{otpErrors}</span>:null}</Error>
	<Button handleSubmit={handleOtpSubmit} value="login"/>
</Form>
<Footer><p>@ 2021 Desoso, Inc. All right reserved</p></Footer>
		</Container>
		)
}

const Container =styled.div`
	width:55%;
	height:100%;
	background:#fff;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:space-around;
	position:relative;
	@media ${device.sm} {
		width:100%;
		background-image:url(${loginBackground});
	background-position:center;
	background-size:cover;
	background-repeat:no-repeat;
	}
`
const Header=styled.header`
margin:10px 0;
	font-family: 'Josefin Sans', sans-serif;
	text-align:center;
	h4{
		color:rgba(0, 0, 0, 0.6);
		margin-top:10px;
	}
	@media ${device.sm} {
		color:#fff;
		h4{
			color:#fff;
		}
	}
`
const Footer=styled.footer`

	font-family: 'Lato', sans-serif;
	color: rgba(19, 52, 116, 0.33);
	@media ${device.sm} {
		color:#fff;
	}
	
`
const Back=styled.button`
	border:none;
	background:transparent;
	position: absolute;
	font-size:1.5rem;
	left:0;
	top:20px;
	margin:1rem;
	color:rgba(0, 0, 0, 0.6);
   cursor:pointer;

`
const Error=styled.div`
	font-size: 14px;
	font-weight:400;
	font-family: 'Lato', sans-serif;
	color:#AE4949;
	
`
const Form =styled.form`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;

`
export default withRouter(LoginBar);