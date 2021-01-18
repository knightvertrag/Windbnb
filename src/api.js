import Axios from "axios";

const getRestaurants = (latitude, longitude)=>{
    return Axios.get(`${process.env.REACT_APP_PUBLIC_BACKEND_URL}search?lat=${latitude}&lon=${longitude}&radius=1000&sort=rating&order=asc`,{headers:{
        'user-key': process.env.REACT_APP_USER_KEY
    }});
  }

  export const apiService = {
      getRestaurants
  }
