import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";

function NavBar() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="button-container">
        <Link to={"/"}>
          <button className="button">Articles</button>
        </Link>
        <Link to={"/topics"}>
          <button className="button">Topics</button>
        </Link>
        <Link to={"/login"}>
          <button className="button">Login</button>
        </Link>
      </div>

      {loggedInUser ? (
        <p className="header2">You are logged in as {loggedInUser}</p>
      ) : null}
    </nav>
  );
}

export default NavBar;
