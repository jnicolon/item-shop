import chillBradImg from "../../imgs/chillBrad.png";
import { level1Intro } from "../textComponents/level1Dialogue";
import { level2Intro } from "../textComponents/level2Dialogue";
import enemy1Img from "../../imgs/unnamed.png";
import enemy2Img from "../../imgs/yoga.jpg";
import hero2img from "../../imgs/drunk.png";

export const levels = [
  {
    level: 1,
    hero: {
      name: "Chill Brad",
      gold: 1000,
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
      img: hero2img,
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
];
