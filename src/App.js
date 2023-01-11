import React, { useState, useEffect } from "react";
import "./App.css";
import { ProgressBar } from "./components/progressBar/progbar";
import { Quiz } from "./components/context";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Win from "./components/win";
import Lost from "./components/lost";
import Card from "./components/card";

function App() {
  //  ------------------------Properties---------------------------
  const [win, setWin] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lost, setLost] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [precentage, setPrecentage] = useState(0);
  const [heart, setHeart] = useState(3);
  const [someQuestions, setSomeQuestions]=useState([])
  const full = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
  const empty = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart"
      viewBox="0 0 16 16"
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>
  );

  let date = new Date();
  let option1 = date.getFullYear() - 3;
  let option2 = date.getFullYear() - 4;
  let option3 = date.getFullYear() - 5;
  let option4 = date.getFullYear() - 3;
  let month = date.getMonth() + 1;
  let day = date.toLocaleDateString();
  let halfQ;
  //-------------- array of the 50 questions------------------------------------
  let questions = [
    {
      text: 'complete the sentence:"harbe _______ yesh bagarinim"',
      options: [
        { id: 0, text: "pilple", isCorrect: false },
        { id: 1, text: "zatar", isCorrect: false },
        { id: 2, text: "melah", isCorrect: true },
        { id: 3, text: "trick", isCorrect: false },
      ],
    },
    {
      text: "Who was the first president of israel?",
      options: [
        { id: 0, text: "Chaim Weizmann", isCorrect: true },
        { id: 1, text: "Eyal golan", isCorrect: false },
        { id: 2, text: "Binyamin ze'ev hrezel", isCorrect: false },
        { id: 3, text: "David ben gurion", isCorrect: false },
      ],
    },
    {
      text: "what is 55+55?",
      options: [
        { id: 0, text: "100", isCorrect: false },
        { id: 1, text: "105", isCorrect: false },
        { id: 2, text: "110", isCorrect: true },
        { id: 3, text: "150", isCorrect: false },
      ],
    },
    {
      text: "What is the largest city in the Israel?",
      options: [
        { id: 0, text: "Haifa", isCorrect: false },
        { id: 1, text: "Ashdod", isCorrect: false },
        { id: 2, text: "Jerusalem", isCorrect: true },
        { id: 3, text: "Tel-Aviv", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the Israel?",
      options: [
        { id: 0, text: "lebanon", isCorrect: false },
        { id: 1, text: "Syria", isCorrect: false },
        { id: 2, text: "Egypt", isCorrect: false },
        { id: 3, text: "Turkey", isCorrect: true },
      ],
    },
    {
      text: "What does “www” stand for in a website browser?",
      options: [
        { id: 0, text: "World wide win", isCorrect: false },
        { id: 1, text: "Weird wet wall", isCorrect: false },
        { id: 2, text: "World widthest window", isCorrect: false },
        { id: 3, text: "World wide web", isCorrect: true },
      ],
    },
    {
      text: "How long is an Olympic swimming pool (in meters)?",
      options: [
        { id: 0, text: "45", isCorrect: false },
        { id: 1, text: "55", isCorrect: false },
        { id: 2, text: "60", isCorrect: false },
        { id: 3, text: "50", isCorrect: true },
      ],
    },
    {
      text: "Which animal can be seen on the Porsche logo?",
      options: [
        { id: 0, text: "Lion", isCorrect: false },
        { id: 1, text: "Bull", isCorrect: false },
        { id: 2, text: "Snake", isCorrect: false },
        { id: 3, text: "Horse", isCorrect: true },
      ],
    },
    {
      text: "What is the name of the largest ocean on earth?",
      options: [
        { id: 0, text: "Arctic ocean", isCorrect: false },
        { id: 1, text: "Atlantic ocean", isCorrect: false },
        { id: 2, text: "Indian ocean", isCorrect: false },
        { id: 3, text: "Pacific Ocean", isCorrect: true },
      ],
    },
    {
      text: "What is the most consumed manufactured drink in the world?",
      options: [
        { id: 0, text: "Coca cola", isCorrect: false },
        { id: 1, text: "Lemonade", isCorrect: false },
        { id: 2, text: "Bear", isCorrect: false },
        { id: 3, text: "Tea", isCorrect: true },
      ],
    },
    {
      text: 'What sport is dubbed the "king of sports"?',
      options: [
        { id: 0, text: "Basketball", isCorrect: false },
        { id: 1, text: "Baseball", isCorrect: false },
        { id: 2, text: "American football", isCorrect: false },
        { id: 3, text: "Soccer", isCorrect: true },
      ],
    },
    {
      text: "In little red riding hood, who does the wolf dress up as?",
      options: [
        { id: 0, text: "Cinderella", isCorrect: false },
        { id: 1, text: "Shrek", isCorrect: false },
        { id: 2, text: "Efi the tiger", isCorrect: false },
        { id: 3, text: "Grendmother", isCorrect: true },
      ],
    },
    {
      text: "“Stars and Stripes” is the nickname of the flag of which country?",
      options: [
        { id: 0, text: "Senegal", isCorrect: false },
        { id: 1, text: "israel", isCorrect: false },
        { id: 2, text: "cuba", isCorrect: false },
        { id: 3, text: "USA", isCorrect: true },
      ],
    },
    {
      text: "How many colors are there in the rainbow?",
      options: [
        { id: 0, text: "6", isCorrect: false },
        { id: 1, text: "8", isCorrect: false },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "7", isCorrect: true },
      ],
    },
    {
      text: "What color is a ruby?",
      options: [
        { id: 0, text: "Blue", isCorrect: false },
        { id: 1, text: "Green", isCorrect: false },
        { id: 2, text: "Purpule", isCorrect: false },
        { id: 3, text: "Red", isCorrect: true },
      ],
    },
    {
      text: "What color is the sky?",
      options: [
        { id: 0, text: "White", isCorrect: false },
        { id: 1, text: "Aqua", isCorrect: false },
        { id: 2, text: "Grey", isCorrect: false },
        { id: 3, text: "Blue", isCorrect: true },
      ],
    },
    {
      text: "What country is responsible for creating the Olympic Games?",
      options: [
        { id: 0, text: "USA", isCorrect: false },
        { id: 1, text: "Israel", isCorrect: false },
        { id: 2, text: "Cuba", isCorrect: false },
        { id: 3, text: "Greece", isCorrect: true },
      ],
    },
    {
      text: "What is Earth's largest continent?",
      options: [
        { id: 0, text: "Africa", isCorrect: false },
        { id: 1, text: "Austrelia", isCorrect: false },
        { id: 2, text: "North America", isCorrect: false },
        { id: 3, text: "Asia", isCorrect: true },
      ],
    },
    {
      text: "How many legs does a spider have?",
      options: [
        { id: 0, text: "6", isCorrect: false },
        { id: 1, text: "9", isCorrect: false },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "8", isCorrect: true },
      ],
    },
    {
      text: "How many teeth does an adult human have?",
      options: [
        { id: 0, text: "32", isCorrect: true },
        { id: 1, text: "30", isCorrect: false },
        { id: 2, text: "34", isCorrect: false },
        { id: 3, text: "36", isCorrect: false },
      ],
    },
    {
      text: "What does come down but never goes up?",
      options: [
        { id: 0, text: "Rain", isCorrect: true },
        { id: 1, text: "Your self esteem", isCorrect: false },
        { id: 2, text: "an elevator", isCorrect: false },
        { id: 3, text: "your height after 22 years", isCorrect: false },
      ],
    },
    {
      text: "What artist has the most streams on Spotify? ",
      options: [
        { id: 0, text: "Drake", isCorrect: true },
        { id: 1, text: "J.cole", isCorrect: false },
        { id: 2, text: "Lil Uzi Vert", isCorrect: false },
        { id: 3, text: "Travis Scott", isCorrect: false },
      ],
    },
    {
      text: "How many minutes are in a full week? ",
      options: [
        { id: 0, text: "10080", isCorrect: true },
        { id: 1, text: "10060", isCorrect: false },
        { id: 2, text: "10120", isCorrect: false },
        { id: 3, text: "10240", isCorrect: false },
      ],
    },
    {
      text: "How many ghosts chase Pac-Man at the start of each game? ",
      options: [
        { id: 0, text: "4", isCorrect: true },
        { id: 1, text: "5", isCorrect: false },
        { id: 2, text: "6", isCorrect: false },
        { id: 3, text: "3", isCorrect: false },
      ],
    },
    {
      text: "What country has won the most World Cups? ",
      options: [
        { id: 0, text: "Brazil", isCorrect: true },
        { id: 1, text: "Argentina", isCorrect: false },
        { id: 2, text: "France", isCorrect: false },
        { id: 3, text: "Germany", isCorrect: false },
      ],
    },
    {
      text: "Kratos is the main character of what video game series?  ",
      options: [
        { id: 0, text: "God Of War", isCorrect: true },
        { id: 1, text: "Spierman", isCorrect: false },
        { id: 2, text: "GTA", isCorrect: false },
        { id: 3, text: "Fortnite", isCorrect: false },
      ],
    },
    {
      text: "What Netflix show had the most streaming views in 2021?",
      options: [
        { id: 0, text: "Squid-Game", isCorrect: true },
        { id: 1, text: "Sex education", isCorrect: false },
        { id: 2, text: "Manifest", isCorrect: false },
        { id: 3, text: "Peaky Blinders", isCorrect: false },
      ],
    },
    {
      text: "How many dots appear on a pair of dice?",
      options: [
        { id: 0, text: "42", isCorrect: true },
        { id: 1, text: "44", isCorrect: false },
        { id: 2, text: "40", isCorrect: false },
        { id: 3, text: "38", isCorrect: false },
      ],
    },
    {
      text: "What's the shortcut for the “copy” function on most computers?",
      options: [
        { id: 0, text: "Ctrl c", isCorrect: true },
        { id: 1, text: "Alt c", isCorrect: false },
        { id: 2, text: "Shift c", isCorrect: false },
        { id: 3, text: "Tab c", isCorrect: false },
      ],
    },
    {
      text: "Which cartoon character lives in a pineapple under the sea?",
      options: [
        { id: 0, text: "Spongebob Squarepants", isCorrect: true },
        { id: 1, text: "Snopp Dogg", isCorrect: false },
        { id: 2, text: "Patrick The Star", isCorrect: false },
        { id: 3, text: "Mr Krab", isCorrect: false },
      ],
    },
    {
      text: "Whose nose grew longer every time he lied?",
      options: [
        { id: 0, text: "Pinocchio", isCorrect: true },
        { id: 1, text: "Lebron James", isCorrect: false },
        { id: 2, text: "Squidward", isCorrect: false },
        { id: 3, text: "Shon Barkn", isCorrect: false },
      ],
    },
    {
      text: "Where does the President of the United States live while in office?",
      options: [
        { id: 0, text: "The White House", isCorrect: true },
        { id: 1, text: "in a pineapple under the sea", isCorrect: false },
        { id: 2, text: "in the desert", isCorrect: false },
        { id: 3, text: "The Hood", isCorrect: false },
      ],
    },
    {
      text: "How many planets are in our solar system?",
      options: [
        { id: 0, text: "8", isCorrect: true },
        { id: 1, text: "7", isCorrect: false },
        { id: 2, text: "9", isCorrect: false },
        { id: 3, text: "6", isCorrect: false },
      ],
    },
    {
      text: "Which Disney movie is Elsa in?",
      options: [
        { id: 0, text: "Frozen", isCorrect: true },
        { id: 1, text: "Cars 2", isCorrect: false },
        { id: 2, text: "Cars", isCorrect: false },
        { id: 3, text: "Ice Age", isCorrect: false },
      ],
    },
    {
      text: "Who is Mickey Mouse's girlfriend?",
      options: [
        { id: 0, text: "Plotu", isCorrect: false },
        { id: 1, text: "Gofi", isCorrect: false },
        { id: 2, text: "Minnie Mouse", isCorrect: true },
        { id: 3, text: "Duffy Duck", isCorrect: false },
      ],
    },
    {
      text: "What is the color of a school bus?",
      options: [
        { id: 0, text: "Yellow", isCorrect: true },
        { id: 1, text: "Green", isCorrect: false },
        { id: 2, text: "Black", isCorrect: false },
        { id: 3, text: "White", isCorrect: false },
      ],
    },
    //-------------------questions useing Date--------------------------------------
    {
      text: "What was the year before 5 years ",
      options: [
        { id: 0, text: option1, isCorrect: false },
        { id: 1, text: option2, isCorrect: false },
        { id: 2, text: option3, isCorrect: true },
        { id: 3, text: option4, isCorrect: false },
      ],
    },
    {
      text: "What month are we in? ",
      options: [
        { id: 0, text: "8", isCorrect: false },
        { id: 1, text: "11", isCorrect: false },
        { id: 2, text: month, isCorrect: true },
        { id: 3, text: "9", isCorrect: false },
      ],
    },
    {
      text: "What is the date today?",
      options: [
        { id: 0, text: "22.8.2021", isCorrect: false },
        { id: 1, text: "17.11.2022", isCorrect: false },
        { id: 2, text: day, isCorrect: true },
        { id: 3, text: "18.12.2023", isCorrect: false },
      ],
    },
    {
      text: "How many pairs of wings do bees have?",
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "2", isCorrect: true },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
      ],
    },
    {
      text: "Where is the Great Pyramid of Giza?",
      options: [
        { id: 0, text: "Gaza city", isCorrect: false },
        { id: 1, text: "Egypt", isCorrect: true },
        { id: 2, text: "Turkey", isCorrect: false },
        { id: 3, text: "Navada", isCorrect: false },
      ],
    },
    {
      text: "What do bees make?",
      options: [
        { id: 0, text: "Milk", isCorrect: false },
        { id: 1, text: "Honey", isCorrect: true },
        { id: 2, text: "Tea", isCorrect: false },
        { id: 3, text: "Cheese", isCorrect: false },
      ],
    },
    {
      text: "When do leafs die?",
      options: [
        { id: 0, text: "Never", isCorrect: false },
        { id: 1, text: "In The Fall", isCorrect: true },
        { id: 2, text: "In The Winter", isCorrect: false },
        { id: 3, text: "In Two Years", isCorrect: false },
      ],
    },
    {
      text: "How many days are in a year?",
      options: [
        { id: 0, text: "366", isCorrect: false },
        { id: 1, text: "365", isCorrect: true },
        { id: 2, text: "367", isCorrect: false },
        { id: 3, text: "364", isCorrect: false },
      ],
    },
    {
      text: "How many days are in a year?",
      options: [
        { id: 0, text: "366", isCorrect: false },
        { id: 1, text: "365", isCorrect: true },
        { id: 2, text: "367", isCorrect: false },
        { id: 3, text: "364", isCorrect: false },
      ],
    },
    {
      text: "Which is the fastest land animal?",
      options: [
        { id: 0, text: "Elephant", isCorrect: false },
        { id: 1, text: "Cheetah", isCorrect: true },
        { id: 2, text: "Jaguar", isCorrect: false },
        { id: 3, text: "Antilope", isCorrect: false },
      ],
    },
    {
      text: "What color are Smurfs?",
      options: [
        { id: 0, text: "Red", isCorrect: false },
        { id: 1, text: "Blue", isCorrect: true },
        { id: 2, text: "Black", isCorrect: false },
        { id: 3, text: "Green", isCorrect: false },
      ],
    },
    {
      text: "How many sides does a triangle have?",
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "2", isCorrect: false },
        { id: 3, text: "5", isCorrect: false },
      ],
    },
    {
      text: "What does he need?",
      options: [
        { id: 0, text: "free shavacado", isCorrect: false },
        { id: 1, text: "Some milk", isCorrect: true },
        { id: 2, text: "Some fries mother fuck*r ", isCorrect: false },
        { id: 3, text: "Black mail", isCorrect: false },
      ],
    },
    {
      text: 'complete the sentence:"do you eat _____ like that?"',
      options: [
        { id: 0, text: "pizza", isCorrect: false },
        { id: 1, text: "Pu*sy", isCorrect: true },
        { id: 2, text: "Hamburger ", isCorrect: false },
        { id: 3, text: "Sushi", isCorrect: false },
      ],
    },
  ];

  // -----------------------Helper Functions---------------------------
  //-----------------------shuffle function----------------------------
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  //----a new var that is the array question after shuffle--------------

  /* -------------A possible answer was clicked------------------------ */
  const optionClicked = (isCorrect) => {
    if (currentQuestion + 1 < questions.length) {
      isCorrect ? setCurrentQuestion(currentQuestion + 1) : setHeart(heart - 1);
      setPrecentage(
        (currPercentage) => currPercentage + 100 / questions.length / 100
      );
    } else {
      setWin(true);
    }
    if (heart == 0) {
      setLost(true);
    }
  };

  /* ----------------Resets the game back to default------------------- */
  const restartGame = () => {
    setCurrentQuestion(0);
    setWin(false);
    setLost(false);
    setPrecentage(0);
    setHeart(3);
  };
  // ---------------start the game and randomize the question-----------------
  const startgame = () => {
    setWelcome(false);
  };
  //-------------give up on the game----------------------
  const giveup = () => {
    setLost(true);
    setWelcome(false);
  };

  useEffect(()=>{
    const fillterQ = shuffle(questions);
    const someQ = fillterQ.splice(0, 20);
    setSomeQuestions(someQ)
  },[])

  return (
    <div>
      <Quiz.Provider 
        value={{
          win,
          setWin,
          currentQuestion,
          setCurrentQuestion,
          lost,
          setLost,
          welcome,
          setWelcome,
          precentage,
          setPrecentage,
          heart,
          setHeart,
          full,
          empty,
          date,
          option1,
          option2,
          option3,
          option4,
          month,
          day,
          questions,
          someQuestions,
          shuffle,
          optionClicked,
          restartGame,
          startgame,
          giveup,
        }}
      >
        <Header />
        {welcome ? (
          <Welcome />
        ) : (
          <div className="App">
            {win ? <Win /> : lost ? <Lost /> : <Card />}
          </div>
        )}
      </Quiz.Provider>
    </div>
  );
}

export default App;
