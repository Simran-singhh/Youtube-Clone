import { useState } from 'react'


import { Box } from '@mui/material'
import {Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail,SignUp,Login,Logout} from './components'
import { BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
 
 return(
  <BrowserRouter>
   <Box sx={{backgroundColor:'#000',margin:0}}>
         <Navbar/>
       
      <Routes>
      {/* <Route
        render={({ location }) => {
          if (location.pathname !== "/Login"  && location.pathname !== "/SignUp") return <Navbar/>;
        }}
      /> */}
      <Route path="/home"  element={<Feed/>}/>
      <Route path="/SignUp"  element={<SignUp />}/>
     
      <Route path="/Login"  element={<Login />}/>
      <Route path="/video/:id" element={<VideoDetail/>}/>
      <Route path="/channel/:id" element={<ChannelDetail/>}/>
      <Route path="/search/:searchTerm" element={<SearchFeed/>}/>

    
      </Routes>
   </Box>
</BrowserRouter>
 )
}

export default App
