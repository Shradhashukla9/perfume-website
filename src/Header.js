import { useState } from "react";
import { Title } from "./Config";
import "./index.css"
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to ="/">
           <li>Home</li>
          </Link>
          <Link to ="/AboutUs">
           <li>About us</li>
          </Link>
          <Link to ="/Contact">
           <li>Contact</li>
          </Link>
          <Link to ="/Cart">
           <li>Cart</li>
          </Link>
          
        </ul>
      </div>
      <div id="log">
      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>log out</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>login</button>
      )}
      </div>
    </div>
  );
};



  export default Header;