import ArticleByID from "../Components/ArticleByID";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const { article_id } = useParams();

  return (
    <main>
      <h1 className="header">WELCOME TO NC NEWS</h1>
      <p className="header"> Here is the article you requested</p>
      <ArticleByID article_id={article_id} />
    </main>
  );
}

export default ArticlePage;
