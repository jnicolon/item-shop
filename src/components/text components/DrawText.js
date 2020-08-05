import React, { Component } from "react";
import { level1Intro } from "../text components/dialogue";
import { connect } from "react-redux";
import { nextSlide } from "../../redux/actions/textActions";
import { Link } from "react-router-dom";

class DrawText extends Component {
  render() {
    const btnAction = (index) => {
      if (level1Intro.length - 1 === index) {
        return <Link to="/Weapon">Go forth!</Link>;
      } else {
        return <button onClick={() => this.props.nextSlide()}>Next</button>;
      }
    };

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
              {btnAction(index)}
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
