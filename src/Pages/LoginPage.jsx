import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import NavBar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import dogImg from "../assets/Dog.jpg";
import Header from "../Components/Header";

function LoginPage() {
  const { setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedInUser(username);
    navigate("/");
  };

  return (
    <div>
      <header>
        <NavBar />
        <Header />
      </header>
      <div className="image-container">
        <img
          className="login-img"
          src={dogImg}
          alt="A dog that's excited to see you"
        />
      </div>
      <h1 className="header2">Who are you? </h1>
      <p className="header2">Please enter a username below to login</p>

      <div className="login-container">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="e.g. jessjelly"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
      <br />
      <p className="header2">
        This will allow you to post and delete your very own comments 🙂
      </p>
      <br />
      <p className="header2">
        Currently, you can only use users who already exist in the database
      </p>
    </div>
  );
}

export default LoginPage;
