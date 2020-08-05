import React, { Component } from "react";
import { level1Intro } from "../text components/dialogue";
import { connect } from "react-redux";
import { nextSlide } from "../../redux/actions/textActions";
import { Link } from "react-router-dom";

class DrawText extends Component {
  render() {
    const chooseBtn = () => {
      if (level1Intro.length - 1 === this.props.currentSlide) {
        return <Link to="/Weapon">Go forth!</Link>;
      } else {
        return <button onClick={() => this.props.nextSlide()}>Next</button>;
      }
    };

    return (
      <div className="draw-text-container">
        {level1Intro.map((object, index) => {
          return (
            <div
              key={index}
              className={
                index === this.props.currentSlide
                  ? "draw-txt-container display-on"
                  : "draw-txt-container display-off"
              }
            >
              <img
                className="draw-txt-image"
                src={object.image}
                alt={index}
              ></img>
              <h3>{object.dialogue}</h3>
            </div>
          );
        })}
        {chooseBtn()}
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
