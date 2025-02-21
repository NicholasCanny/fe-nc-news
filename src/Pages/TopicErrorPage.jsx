import NavBar from "../Components/Navbar";
import catImg from "../assets/SurprisedCat.jpeg";
import Header from "../Components/Header";

function TopicErrorPage() {
  return (
    <main>
      <NavBar />
      <Header />
      <p className="header2"> Wake up human, this topic doesn't exist! </p>
      <div className="image-container">
        <img src={catImg} alt="Image of a surprised cat" />
      </div>
    </main>
  );
}

export default TopicErrorPage;
