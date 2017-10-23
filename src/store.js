import createStore from 'redux-zero';

 const GAME =
[
    {
        id: 1,
        question: "Which is the oldest airline in the world?",
        answers: ["Avianca", "KLM", "Qantas"],
        answerGood: "KLM",
        image: " https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg"
      },
      {
        id: 2,
        question: "Which is the largest port in the world?",
        answers: ["Port of Shanghai", " Port of Singapore", "Port of Rotterdam"],
        answerGood: "KLM",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg"
      },
    
      {
        id: 3,
        question: "What is the longest distance cycling backwards?",
        answers: ["89.30km", "675.10km", "337.60km"],
        answerGood: "KLM",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg"
      },
      {
        id: 4,
        question: "What is the highest speed ever reached by a school bus?",
        answers: ["590 km/h", "320 km/h", "245 km/h"],
        answerGood: "KLM",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bus.svg"
      },
      {
        id: 5,
        question: "What is the longest car trip on one tank of gas?",
        answers: ["2617 km", "3568 km", "1732 km"],
        answerGood: "KLM",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg"
      } 
];
//https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/truck.svg
const initialState = {
    game : GAME,
    preguntaActual : 0
};

const store = createStore(initialState);
export default store;