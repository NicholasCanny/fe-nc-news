import NavBar from "../Components/Navbar";
import monkeyImg from "../assets/Monkey.jpeg";

function ArticleErrorPage() {
  return (
    <main>
      <NavBar />
      <h1 className="header">WELCOME TO NC NEWS</h1>
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
