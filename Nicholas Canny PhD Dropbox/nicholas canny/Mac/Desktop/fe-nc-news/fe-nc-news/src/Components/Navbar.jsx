import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";

function NavBar() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <button className="button">Articles</button>
      </Link>
      <Link to={"/topics"}>
        <button className="button">Topics</button>
      </Link>
      <br />
      <br />
      {loggedInUser ? <p>You are logged in as {loggedInUser}</p> : null}
    </nav>
  );
}

export default NavBar;
