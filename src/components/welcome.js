import "../../src/App.css"
import { useContext } from "react";
import { Quiz } from "./context";

const Welcome = () => {
    const {startgame} = useContext(Quiz)
    return ( 
        <div className="welcome">
        <h1>Hello and wellcome to our site</h1>
        <p>
          Here you are going to find a quiz game that includes 20 questions
          and is going to challenge your knowledge.
        </p>
        <p>Click the button below to start the game:</p>
        <button onClick={() => startgame()}> start the game</button>
      </div>
     );
}
 
export default Welcome;