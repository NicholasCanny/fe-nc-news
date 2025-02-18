import ArticleList from "../Components/ArticleList";

function HomePage() {
  return (
    <header>
      <h1 className="header">WELCOME TO NC NEWS</h1>
      <p className="header">Here is a list of all available articles</p>

      <ArticleList />
    </header>
  );
}

export default HomePage;
