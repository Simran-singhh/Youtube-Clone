import { Box,Stack, Typography } from "@mui/material"
import {SideBar,Videos} from "./"
import { useState,useEffect } from "react"
import { fetchFromApi } from "../utils/FetchFromAPI"




const Feed = () => {
  const[SelectedCategory,setSelectedCategory]=useState('New')
  const[videos,setVideos]=useState([])
  useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${SelectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [SelectedCategory]);

    


  return (
   <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
    <Box sx={{height:{sx:'auto' },borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
      
      <SideBar SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory}/>

      <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}>
        Copyright 2022 JSM media
      </Typography>

    </Box>

    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>

        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
         {SelectedCategory}   <span style={{color:'#F31503',p:'2',m:'2'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
    </Box>

   </Stack>
  )
}

export default Feed
