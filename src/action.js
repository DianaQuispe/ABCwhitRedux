import store from "./store";

export const questions = (e) => {
    let oldQuestion = store.getState().game;
    const addNextquestion = [
    {
        question : store.getState().players.question,
        answers = store.getState().players.answers,
        image = store.getState().players.image,

    }]
    store.setState({
        game = addNextquestion
        })
}