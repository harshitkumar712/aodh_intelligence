import React, { useState }  from "react";
import styled from 'styled-components';
import Modal from './Modal';
import {Link} from 'react-router-dom';

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
				<td><Button onClick={handleModalAccess}>Access</Button></td>
			</Row>
			 <Modal open={modal} close={()=>setModal(false)}>

            	<div>Add any comment</div><input  type="text"/><br/>
            	<p>Hello this is testing <span ><b>{newDate.toDateString()}</b></span></p>
            	<p>Now it's live <span ><b>{newDate.toDateString()}</b></span></p>
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

	background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`
const Button = styled.button`
border:none;
color:#fff;
padding:.5rem 1rem;
	background: #0CB2B2;
border-radius: 10px;

`
export default HospitalRow;
