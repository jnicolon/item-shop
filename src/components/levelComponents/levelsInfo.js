import chillBradImg from "../../imgs/chillBrad.png";
import { level1Intro } from "../textComponents/level1Dialogue";
import { level2Intro } from "../textComponents/level2Dialogue";
import { level3Intro } from "../textComponents/level3Dialogue";
import enemy1Img from "../../imgs/unnamed.png";
import enemy2Img from "../../imgs/yoga.jpg";
import enemy3Img from "../../imgs/bigBoy.jpg";
import hero3Img from "../../imgs/mindFreak.jpg";
import hero2Img from "../../imgs/drunk.png";

export const levels = [
  {
    level: 1,
    hero: {
      name: "Chill Brad",
      gold: 12,
      img: chillBradImg,
    },
    enemy: {
      name: "A Tiny Orc",
      stats: {
        hp: 15,
        atk: 3,
        mana: 0,
      },
      img: enemy1Img,
    },
    introDialogue: level1Intro,
  },
  {
    level: 2,
    hero: {
      name: "Mongor",
      gold: 36,
      img: hero2Img,
    },
    enemy: {
      name: "Limber Johnny",
      stats: {
        hp: 25,
        atk: 45,
        mana: 0,
      },
      img: enemy2Img,
    },
    introDialogue: level2Intro,
  },
  {
    level: 3,
    hero: {
      name: "MindFreak",
      gold: 75,
      img: hero3Img,
    },
    enemy: {
      name: "Big Boy Welder",
      stats: {
        hp: 250,
        atk: 5,
        mana: 0,
      },
      img: enemy3Img,
    },
    introDialogue: level3Intro,
  },
];
