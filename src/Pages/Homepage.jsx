import ArticleList from "../Components/ArticleList";
import NavBar from "../Components/Navbar";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <h1 className="header">FAUX REDDIT</h1>
      </header>
      <main>
        <p className="header">Here is a list of all available articles</p>
        <ArticleList />
      </main>
    </>
  );
}

export default HomePage;
