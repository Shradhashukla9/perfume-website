import { useState } from "react";
import { Title } from "./Config";
import "./index.css"

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
          <li>review</li>
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