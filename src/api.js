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
  return ncnewsApi.get(`/articles/${articleID}`).then((response) => {
    return response.data.article;
  });
};

export const fetchComments = (articleID) => {
  return ncnewsApi.get(`/articles/${articleID}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const changeVote = (articleID, addOrSubtract) => {
  return ncnewsApi
    .patch(`/articles/${articleID}`, { inc_votes: addOrSubtract })
    .then((response) => {
      return response.data.article;
    });
};

export const postComment = (article_id, comment) => {
  console.log(comment);
  return ncnewsApi
    .post(`/articles/${article_id}/comments`, comment)
    .then((response) => {
      console.log(response);
      return response.data.comment;
    });
};
