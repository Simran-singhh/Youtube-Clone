import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper ,Typography} from '@mui/material';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import{firebaseAuth} from"../utils/firebase-config";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
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
    const handleSubmit=async()=>{try{
        const {email,password}=FormValues;
         await   signInWithEmailAndPassword(firebaseAuth,email,password);
      }catch(e){console.log(e);}
      }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser)navigate("/home")
  })

  return (
    <div style={myStyle} >
      <Box sx={{pt:10, mr:{md:'5'}}}>
    <Paper   component='form' 
            sx={{width:500,
                 height:450,
                 justifyContent:'center',
            alignItems:'center',
            opacity:'1',
              ml:{sm:'100px',md:'500px'},
            mt:'60px',
              pt:'12px',
            pl:'20px',
            mr:{md:'5'},
          boxShadow:'3',
        backgroundColor:'#EEEEEE'}}  
        >
       <h1>SignIn</h1>
      
    
    
    
     <Box sx={{ width: 450,mb:'18px'}} >
          <TextField fullWidth label="Email" id=" Email" type="email" name="email" onChange={(e)=>setFormValue({...FormValues,[e.target.name]:e.target.value})}/>
     </Box>
    
     <Box sx={{ width: 450,mb:'18px'}} >
          <TextField fullWidth label="Password" id=" Password"  type="password" name="password" onChange={(e)=>setFormValue({...FormValues,[e.target.name]:e.target.value})}/>
     </Box>
       <Box>
         <Typography  variant="subtitle1">
           New User? <Link to="/SignUp">Sign Up</Link>
         </Typography>
       </Box>
     <Button variant="outlined"  sx={{mt:'20px'}} onClick={handleSubmit}>
      Sign In
          </Button>
        </Paper>
        </Box>
        </div> 
  )
}

export default Login
