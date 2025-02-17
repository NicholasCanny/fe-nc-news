import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://nicholascannybackendproject.onrender.com/api",
});

export const fetchArticles = () => {
  return ncnewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};
