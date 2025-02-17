import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://nicholascannybackendproject.onrender.com/api",
});

export const fetchArticles = () => {
  return ncnewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchIndividualArticle = (articleID) => {
  return ncnewsApi.get(`/articles/2`).then((response) => {
    return response.data.article;
  });
};
