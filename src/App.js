import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { selectOption, submit } from "./actions";
import "./App.css";

const Modal = ({}) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Do you want to learn how to build React apps like this?
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Learn <b>React</b> from scratch with me, it's easy!
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Yes, let's go!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header = ({ game, currentQuestion }) => {
  return (
    <div>
      <div className="fixed">
        <a
          href="#"
          data-toggle="modal"
          data-target="#exampleModal"
          className="btn btn-default btn-circle"
        >
          <i className="fa fa-info-circle fa-3x" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
const YourAnswers = ({ game, currentQuestion, complet, answers }) => {
  const myQuestions = game.map((question,i) => {
    return (
      <div>
        <ol>
          <li>{question.question} 
          <b> {answers[i]}</b>
          </li>
        </ol>
      </div>
    );
  });
  return (
    <div>
      <h1>Here are your answers:</h1>
      {myQuestions} 
      <button className="btn btn-block" onClick={submit}>Submit</button>       
    </div>
  );
};
const onSubmit = e => {
  e.preventDefault();
  selectOption(e);
};

const Questions = ({ game, currentQuestion, complet, answers }) => {

  
    if(complet == true) {
     return  <YourAnswers game={game} currentQuestion={currentQuestion} complet={complet} answers={answers} />
    }else {
      let answers;
           answers = game[currentQuestion].answers.map(thisAn => (
            <form onSubmit={onSubmit}>
              <div className="col-md-4">
                <button
                  ref={e => (this.refInput = e)}
                  className="btn btnQuiz btn-default btn-block"
                >
                  <i className="fa fa-user" />
                  {thisAn}
                </button>
              </div>
            </form>
          ));
        
      return (
        <section className="contenedor container-fluid text-center">
          <div className="row">
            <img
              id="imagenes"
              height={250}
              width={250}
              src={game[currentQuestion].image}
              className="img-responsive center-block"
            />
            <div id="questions" />
            {game[currentQuestion].question}
            <div className="col-md-12 container-fluid" />
            <div className="answers row">{answers}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="divInterno">
                <div className="social text-center">
                  <a href="#" className="btn btn-default btn-circle">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="btn btn-default btn-circle">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="btn btn-default btn-circle">
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
 
};

const App = ({ game, currentQuestion, answers, complet }) => {
  return (
    <div>
      <Header game={game} currentQuestion={currentQuestion} />
      <Modal />
      <Questions
        game={game}
        currentQuestion={currentQuestion}
        complet={complet}
        answers={answers}
      />
    </div>
  );
};

const mapToProps = ({ game, currentQuestion, answers, complet }) => ({
  game,
  currentQuestion,
  answers,
  complet
});
export default connect(mapToProps)(App);
