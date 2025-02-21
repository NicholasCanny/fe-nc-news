import ArticleList from "../Components/ArticleList";
import NavBar from "../Components/Navbar";
import Header from "../Components/Header";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <p className="header">Here is a list of all available articles</p>
        <ArticleList />
      </main>
    </>
  );
}

export default HomePage;
