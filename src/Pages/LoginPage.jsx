import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import NavBar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import dogImg from "../assets/Dog.jpg";
import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";

function LoginPage() {
  const { setLoggedInUser } = useContext(UserContext);
  const [username, setUserName] = useState("");
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
      <LoginForm
        handleLogin={handleLogin}
        username={username}
        setUserName={setUserName}
      />
      <p className="header2">
        This will allow you to post and delete your very own comments 🙂
      </p>
      <p className="header2">
        Currently, you can only choose users who already exist in the database
      </p>
    </div>
  );
}

export default LoginPage;
