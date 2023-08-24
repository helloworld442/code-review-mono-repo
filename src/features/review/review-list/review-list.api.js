import api from "../../../axios/api";

export const getReviews = async () => {
  const response = await api.get("/reviews");
  return response.data;
};
