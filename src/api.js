import Axios from "axios";

const getRestaurants = (latitude, longitude, radius) => {
  return Axios.get(
    `${process.env.REACT_APP_PUBLIC_BACKEND_URL}search?lat=${latitude}&lon=${longitude}&radius=${radius}&sort=rating&order=desc`,
    {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
      },
    }
  );
};

const getRestaurantMenu = (resId) => {
  return Axios.get(
    `${process.env.REACT_APP_PUBLIC_BACKEND_URL}dailymenu?res_id=${resId}`,
    {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
      }
    }
  )
}

export const apiService = {
  getRestaurants,
  getRestaurantMenu
};
