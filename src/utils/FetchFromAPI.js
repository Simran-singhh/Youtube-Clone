import axios from 'axios';

const Base_Url= 'https://youtube-v31.p.rapidapi.com'


const options = {
    
    url:Base_Url,
    params: {
       maxResults:'50'
     
    },
    headers: {
      'X-RapidAPI-Key': 'abfc3e1caemshb1863f97a53aefep16afb2jsn8130329d3e3c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi=async(url)=>{
   
    const{data}=await axios.get(`${Base_Url}/${url}`,options)
    return data;
  }