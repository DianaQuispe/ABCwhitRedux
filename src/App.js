import React, { Component } from "react";
import { connect } from "redux-zero/react";
import {selectOption  } from "./actions";
import "./App.css";

const Header = ({ game }) => {
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
      <div className="container text-center">
        <div className="row">
          <img
            id="imagenes"
            height={250}
            width={250}
            src={game.image}
            className="img-responsive center-block"
          />
        </div>
      </div>
    </div>
  );
};
const Questions = ({ game, selectOption }) => {
  // const answers = game.answers[0].map(thisAn => (
  //   <div className="answers row">
  //     <div className="col-md-4">
  //       <a href="#" className="btn btnQuiz btn-default btn-block">
  //         <i className="fa fa-user" />
  //         {thisQ.answers[0]}
  //       </a>
  //     </div>
  //   </div>
  // ));
  //const question = game.map(thisQ => (
  // <div className="row">
  //   <img
  //     id="imagenes"
  //     height={250}
  //     width={250}
  //     src={thisQ.image}
  //     className="img-responsive center-block"
  //   />
  //   <div id="questions" />
  //   {thisQ.question}
  //   <div className="col-md-12 container-fluid" />
  //   <div className="answers row">
  //     <div className="col-md-4">
  //       <a href="#" className="btn btnQuiz btn-default btn-block">
  //         <i className="fa fa-user" />
  //         {thisQ.answers[0]}
  //       </a>
  //     </div>
  //     <div className="col-md-4">
  //       <a href="#" className="btn btnQuiz btn-default btn-block">
  //         <i className="fa fa-user" />
  //         {thisQ.answers[1]}
  //       </a>
  //     </div>
  //     <div className="col-md-4">
  //       <a href="#" className="btn btnQuiz btn-default btn-block">
  //         <i className="fa fa-user" />
  //         {thisQ.answers[2]}
  //       </a>
  //     </div>
  //   </div>

  // </div>
  // )
  //);
  const answers = game[0].answers.map(thisA => (
    <div className="col-md-4">
      <a  href="#" onClick={selectOption} className="btn btnQuiz btn-default btn-block">
        <i className="fa fa-user" />
        {thisA}
      </a>
    </div>
  ));
  return (
    <section className="contenedor container-fluid text-center">
      <div className="row">
        <img
          id="imagenes"
          height={250}
          width={250}
          src={game[0].image}
          className="img-responsive center-block"
        />
        <div id="questions" />
        {game[0].question}
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
};
// function Stats( props) {

// }
const App = ({ game }) => {
  return (
    <div>
      <Header game={game} />
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
      <Questions game={game} />
    </div>
  );
};

const mapToProps = ({ game }) => ({ game });
export default connect(mapToProps)(App);
