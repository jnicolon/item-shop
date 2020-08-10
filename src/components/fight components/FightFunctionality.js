//instantiates new characters
export class Character {
  constructor(name, hp, atk, mana) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.mana = mana;
  }

  attack(enemy) {
    return enemy.hp - this.atk;
  }
}

//calculate the total stats that it's in the cart
export function playerStats(cart) {
  const hp = cart.reduce((total, item) => {
    return total + item.hp;
  }, 0);
  const atk = cart.reduce((total, item) => {
    return total + item.atk;
  }, 0);
  const mana = cart.reduce((total, item) => {
    return total + item.mana;
  }, 0);

  //returns the total in an object
  return {
    hp,
    atk,
    mana,
  };
}
