import createStore from 'redux-zero';

 const GAME =
[
    {
        question: "Which is the oldest airline in the world?",
        answers: ["Avianca", "KLM", "Qantas"],
        answerGood: "KLM",
        image: " https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg"
      },
      {
        question: "Which is the largest port in the world?",
        answers: ["Port of Shanghai", " Port of Singapore", "Port of Rotterdam"],
        answerGood: "Port of Shanghai",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg"
      },
    
      {
        question: "What is the longest distance cycling backwards?",
        answers: ["89.30km", "675.10km", "337.60km"],
        answerGood: "337.60km",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg"
      },
      {
        question: "What is the highest speed ever reached by a school bus?",
        answers: ["590 km/h", "320 km/h", "245 km/h"],
        answerGood:"590 km/h",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bus.svg"
      },
      {
        question: "What is the longest car trip on one tank of gas?",
        answers: ["2617 km", "3568 km", "1732 km"],
        answerGood: "2617 km",
        image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg"
      } 
];
//https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/truck.svg
const initialState = {
    game : GAME,
    currentQuestion : 0,
    complet : false,
    answers :  [],
};

const store = createStore(initialState);
export default store;