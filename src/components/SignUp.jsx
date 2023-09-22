
import { createUserWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper ,Typography} from '@mui/material';
import { useState } from 'react';
import{firebaseAuth} from"../utils/firebase-config";


const SignUp = () => {
  const myStyle={
    backgroundImage:
"url('https://t4.ftcdn.net/jpg/03/71/56/17/360_F_371561707_MMRvwjvBxemkuHkPLyEw65TKPuOuVzZh.jpg')",
    height:'110vh',
    marginTop:'-70px',
    alignItems:'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   
};
const navigate=useNavigate();
const [FormValues,setFormValue]=useState({
  username:"",
  email:"",
  password:"",
})
onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser)navigate("/home")
})

const handleChange=(e)=>{(e)=>setFormValue({...FormValues,[e.target.name]:e.target.value})}
const handleSubmit=async()=>{try{
  const {email,password}=FormValues;
   await   createUserWithEmailAndPassword(firebaseAuth,email,password);
}catch(e){console.log(e);}
}
  return (
    <div style={myStyle} >
      <Box sx={{pt:10,mr:{md:'5'},}}>
    <Paper   component='form'
        sx={{width:500,
             height:450,
             justifyContent:'center',
        alignItems:'center',
        ml:{sm:'100px',md:'500px'},
        mt:'60px',
          pt:'12px',
        pl:'20px',
      boxShadow:'3',
      mr:{md:'5'},
    backgroundColor:'#EEEEEE'}}  
    >
   <h1>SignUp</h1>
  

<Box sx={{ width: 450 ,mb:'15px'}} >
      <TextField fullWidth label=" UserName" id="userName" name="username" value={FormValues.username} onChange={(e)=>setFormValue({...FormValues,[e.target.name]:e.target.value})}/>
 </Box>

 <Box sx={{ width: 450,mb:'18px'}} >
      <TextField fullWidth label="Email" id=" email" type="email"  name="email" onChange={(e)=>setFormValue({...FormValues,[e.target.name]:e.target.value})}/>
 </Box>

 <Box sx={{ width: 450,mb:'18px'}} >
      <TextField fullWidth label="Password" id=" password"  type="password" name="password" onChange={(e)=>setFormValue({...FormValues,[e.target.name]:e.target.value})}/>
 </Box>
   <Box>
     <Typography  variant="subtitle1">
     Already have an account? <Link to="/Login"> Sign In</Link>
     </Typography>
   </Box>
   <Button variant="outlined"  sx={{mt:'20px'}} onClick={handleSubmit}>
       Sign Up
      </Button>
    </Paper>
    </Box>
    </div>
  )
}

export default SignUp
