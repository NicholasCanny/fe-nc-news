import NavBar from "../Components/Navbar";
import monkeyImg from "../assets/Monkey.jpeg";
import Header from "../Components/Header";

function MainErrorPage() {
  return (
    <main>
      <NavBar />
      <Header />
      <p className="header2">
        {" "}
        Excuse me, trying to take care of business here, choose a valid page!{" "}
      </p>
      <img
        className="image-container"
        src={monkeyImg}
        alt="Image of a monkey on a laptop"
      />
    </main>
  );
}

export default MainErrorPage;
