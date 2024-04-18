import axios from "axios";

const instance = axios.create({
  baseURL: "https://662009a93bf790e070aece1f.mockapi.io",
});

export const requestContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

// export const requestProductsByQuery = async (query = "") => {
//   const { data } = await instance.get(`/products/search?q=${query}`);

//   return data;
// };

// export const requestProductDetailsById = async (productId) => {
//   const { data } = await instance.get(`/products/${productId}`);

//   return data;
// };
