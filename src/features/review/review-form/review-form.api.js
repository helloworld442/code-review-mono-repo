import api from "../../../axios/api";

export const postReviews = async (req) => {
  const response = await api.post("/reviews", req);
  return response.data;
};
