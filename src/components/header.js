import "../../src/App.css"
import { useContext } from "react";
import { Quiz } from "./context";

const Header = () => {
  const { giveup } = useContext(Quiz);
  return (
    <div className="header">
      <text className="banner">King of the Quiz👑</text>
      <div className="give">
        <button className="giveup" onClick={() => giveup()}>
          give up
        </button>
      </div>
    </div>
  );
};

export default Header;
