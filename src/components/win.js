import "../../src/App.css"
import { useContext } from "react";
import { Quiz } from "./context";

const Win = () => {
    const {restartGame}= useContext(Quiz)
    return ( 
        <div className="win">
        <h1>🤴🏼You are the king of the Quiz🤴🏼</h1>
        <button onClick={() => restartGame()}>Restart game</button>
      </div>
     );
}
 
export default Win;