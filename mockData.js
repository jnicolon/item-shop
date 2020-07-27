const items = [
  {
    id: 1,
    name: "Weapon of power",
    slug: "wop",
    type: "weapon",
    description: "These is a powerful weapon",
    price: 500,
    img: "./imgs/wop.png",
  },
  {
    id: 2,
    name: "Sword of power",
    slug: "wop",
    type: "armor",
    description: "These is a powerful sword",
    price: 400,
    img: "./imgs/sop.png",
  },
  {
    id: 3,
    name: "Green Ball of Death",
    slug: "wop",
    type: "spell",
    description: "It's green and it will kill you",
    price: 200,
    img: "./imgs/gbd.png",
  },
];

const heroes = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newItem = {
  id: null,
  name: "",
  slug: "",
  type: "",
  description: "",
  price: null,
  img: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newItem,
  items,
  heroes,
};
