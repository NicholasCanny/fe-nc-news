import ArticleByID from "../Components/ArticleByID";
import { useParams } from "react-router-dom";
import NavBar from "../Components/Navbar";

function ArticlePage() {
  const { article_id } = useParams();

  return (
    <main>
      <NavBar />
      <h1 className="header">FAUX REDDIT</h1>
      <p className="header"> Here is the article you requested</p>
      <ArticleByID article_id={article_id} />
    </main>
  );
}

export default ArticlePage;
