import NavBar from "../Components/Navbar";
import monkeyImg from "../assets/Monkey.jpeg";
import Header from "../Components/Header";

function ArticleErrorPage() {
  return (
    <main>
      <NavBar />
      <Header />
      <p className="header">
        {" "}
        Excuse me, trying to take care of business here, try choosing a valid
        article!{" "}
      </p>
      <img
        className="image-container"
        src={monkeyImg}
        alt="Image of a monkey on a laptop"
      />
    </main>
  );
}

export default ArticleErrorPage;
