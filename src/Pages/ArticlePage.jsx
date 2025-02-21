import ArticleByID from "../Components/ArticleByID";
import { useParams } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Header from "../Components/Header";

function ArticlePage() {
  const { article_id } = useParams();

  return (
    <main>
      <NavBar />
      <Header />
      <ArticleByID article_id={article_id} />
    </main>
  );
}

export default ArticlePage;
