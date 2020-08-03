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

//recursive function for the fights.
//empty array to record all the actions of the auto battle
let battleLog = [];
//we pass two characters one for the player, one for the enemy
export function fight(player, enemy) {
  //when one of the two has zero hp,  .
  if (player.hp <= 0 || enemy.hp <= 0) {
    if (player.hp <= 0) {
      //we add who wins to the battle log
      battleLog.push(`${enemy.name} defeated ${player.name}`);
    } else if (enemy.hp <= 0) {
      battleLog.push(`${player.name} defeated ${enemy.name}`);
    }
    //and return the battle log
    return battleLog;
  } else {
    //we attack and set the new hp of the enemy.
    enemy.hp = player.attack(enemy);
    //we add the action to the battle log.
    battleLog = [
      ...battleLog,
      `${player.name} attacked ${enemy.name} and dealt ${player.atk} damage. ${enemy.name} has ${enemy.hp} hp left`,
    ];
    //we check if it's zero and if so we re start the function here
    enemy.hp <= 0
      ? fight(player, enemy)
      : //if not we let the enemy attack back
        (player.hp = enemy.attack(player));
    battleLog.push(
      `${enemy.name} attacked ${player.name} and dealt ${enemy.atk} damage. ${player.name} has ${player.hp} hp left`
    );
    return fight(player, enemy);
  }
}

//function to calculate the total stats that it's in the cart
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
