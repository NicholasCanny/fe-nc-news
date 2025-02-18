import ArticleByID from "../Components/ArticleByID";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const { article_id } = useParams();

  return (
    <div>
      <h1 className="h1">WELCOME TO NC NEWS</h1>
      <p className="h1"> Here is the article you requested</p>
      <ArticleByID article_id={article_id} />
    </div>
  );
}

export default ArticlePage;
