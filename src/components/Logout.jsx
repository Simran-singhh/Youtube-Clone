import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {  signOut,onAuthStateChanged } from "firebase/auth";
import{firebaseAuth} from"../utils/firebase-config";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
const Logout = () => {
    
    const handleSubmit=()=>{
      try{
        signOut(firebaseAuth)
      }  catch(e){
        console.log(e);
      }
    }
    const navigate=useNavigate();
onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(!currentUser)navigate("/Login")
  })
  return (
   <Button  onClick={handleSubmit}> <LogoutIcon sx={{color:"red"}}/></Button>
  )
}

export default Logout


