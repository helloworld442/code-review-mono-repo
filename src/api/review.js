import api from "./axios";

const postReviews = async (req) => {
  const response = await api.post("/reviews", req);
  return response.data;
};

const getReviews = async () => {
  const response = await api.get("/reviews");
  return response.data;
};

const getReviewById = async (req) => {
  const response = await api.get("/reviews/" + req);
  return response.data;
};

export { postReviews, getReviews, getReviewById };
