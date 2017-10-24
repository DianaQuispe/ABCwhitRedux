import store from "./store";
export const selectOption = (option) =>{
    // console.log(option.target.textContent)
    let thisAnswer = option.target.textContent;
    let answers = store.getState().answers;
    let push =  answers.push(thisAnswer)
    let currentQuestion = store.getState().currentQuestion
    let answerGood = [];
    let thatAnswer = store.getState().game[store.getState().currentQuestion].answerGood;
    answerGood.push(thatAnswer);
    console.log(answers, answerGood);

    currentQuestion++;
    if(push == store.getState().game.length) {
        store.setState({
            complet : true,
        })
        console.log(store.getState().complet);
    }
    store.setState({
      currentQuestion:  currentQuestion,
      answers: answers
    });


//     if (answers[currentQuestion] == store.getState().answerGood[currentQuestion]) {
//       console.log("equals:", answers[store.getState().currentQuestion]);
//     } else {
//       console.log(answers);
//     }

};