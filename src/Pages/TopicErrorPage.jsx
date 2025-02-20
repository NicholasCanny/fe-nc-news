import NavBar from "../Components/Navbar";
import catImg from "../assets/SurprisedCat.jpeg";

function TopicErrorPage() {
  return (
    <main>
      <NavBar />
      <h1 className="header">WELCOME TO NC NEWS</h1>
      <p className="header2"> Wake up human, this topic doesn't exist! </p>
      <img
        className="image-container"
        src={catImg}
        alt="Image of a surprised cat"
      />
    </main>
  );
}

export default TopicErrorPage;
