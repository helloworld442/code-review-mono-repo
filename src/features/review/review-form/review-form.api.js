import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const postReviews = async (req) => {
  const response = await instance.post("/reviews", req);
  return response;
};
