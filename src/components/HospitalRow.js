import React, { useState }  from "react";
import styled from 'styled-components';
import Modal from './Modal';
import {Link} from 'react-router-dom';
import {device} from '../constants/mediaQueries';

const HospitalRow = () => {
	const [modal,setModal]= useState(false);
	const [modalAccess,setModalAccess]= useState(false);
	let newDate = new Date(Date.now());
	const handleModal = () => {
		setModal(!modal);
		
	};
	const handleModalAccess = () => {
		setModalAccess(!modal);
		
	};



	return (
		<>
			<Row>
				<td>22/12/2020 </td>
				<td>Apollo Hospital</td>
				<td>0761-242567</td>
				<td>Indore, (M.P)</td>
				<td><Link to="/registration"><Button>Request</Button></Link></td>
				<td>Pending</td>
				<td><Button onClick={handleModal} >Open</Button></td>
				<td><Button onClick={handleModalAccess}>Access to</Button></td>
			</Row>
			 <Modal open={modal} close={()=>setModal(false)}>

            	<input placeholder="Add any comment" type="text"/><br/>
            	<p>Hello this is testing<br/> <span style={{color:"#003300"}}><b>-{newDate.toDateString()}</b></span></p>
            	<p>Now it's live<br/><span style={{color:"#003300"}}><b>-{newDate.toDateString()}</b></span></p>
            	<button onClick={handleModal}>Comment</button>
            </Modal>
            <Modal open={modalAccess} close={()=>setModalAccess(false)}>
            <div style={{display:"flex","flexDirection":"column",'alignItems':"center"}}>
            	<button >Antony</button>
            	<button >Rutherford</button>
            	<button >christiana</button>
            	<button >Robin</button>
            	<button >Ronald</button>
            	<button >Donald</button>
            	</div>
            </Modal>
		</>
	);
};

const Row= styled.tr`
td{
	padding:1rem;
}

@media ${device.md} {
		td{
			padding:0.6rem;
			font-size:0.8rem;
		}
		
		}

	background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`
const Button = styled.button`
border:none;
color:#fff;
padding:5px 10px;
	background: #0CB2B2;
border-radius: 10px;
font-size:0.8rem;

`
export default HospitalRow;
