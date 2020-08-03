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
let battleLog = [];

export function fight(character, enemy) {
  if (character.hp <= 0 || enemy.hp <= 0) {
    if (character.hp <= 0) {
      battleLog.push(`${enemy.name} defeated ${character.name}`);
    } else if (enemy.hp <= 0) {
      battleLog.push(`${character.name} defeated ${enemy.name}`);
    }
    return battleLog;
  } else {
    enemy.hp = character.attack(enemy);
    battleLog = [
      ...battleLog,
      `${character.name} attacked ${enemy.name} and dealt ${character.atk} damage. ${enemy.name} has ${enemy.hp} hp left`,
    ];

    character.hp = enemy.attack(character);
    battleLog.push(
      `${enemy.name} attacked ${character.name} and dealt ${enemy.atk} damage. ${character.name} has ${character.hp} hp left`
    );
    return fight(character, enemy);
  }
}
