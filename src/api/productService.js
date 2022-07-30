import { ALL_PRODUCTS } from "./productURL";

import axios from "axios";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(ALL_PRODUCTS);
    return response.data;
  } catch (error) {
    // show some alert in real world application. But just consoling here
    console.log(error);
  }
};
