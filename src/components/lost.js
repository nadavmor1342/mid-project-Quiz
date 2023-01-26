import "../../src/App.css"
import { useContext } from "react";
import { Quiz } from "./context";
const Lost = () => {
    const {restartGame,someQuestions}= useContext(Quiz)
    return (
        <div className="lose">
              <h1>💩you lost the game💩</h1>
              <h3>you are not a part of the royal blood</h3>
              <button onClick={() => restartGame()}>Restart game</button>
            </div>
      );
}
 
export default Lost;