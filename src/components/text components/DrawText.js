import React, { Component } from "react";
import { level1Intro } from "../text components/dialogue";
import { connect } from "react-redux";
import { nextSlide } from "../../redux/actions/textActions";

class DrawText extends Component {
  render() {
    return (
      <div>
        {level1Intro.map((object, index) => {
          return (
            <div
              className={
                index === this.props.currentSlide ? "display-on" : "display-off"
              }
            >
              <h3>{object.dialogue}</h3>
              <button onClick={() => this.props.nextSlide()}>Next</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSlide: state.txt.currentSlide,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextSlide: (level) => {
      dispatch(nextSlide(level));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawText);
