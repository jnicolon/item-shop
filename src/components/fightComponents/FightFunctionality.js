//instantiates new characters
export class Character {
  constructor(name, hp, atk, mana, spellMana, spellName) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.originalMana = mana;
    this.totalMana = mana;
    this.spellMana = spellMana;
    this.spellName = spellName;
  }

  attack(enemy) {
    return enemy.hp - this.atk;
  }

  checkSpell() {
    let checkSpellOutcome = {
      spellStatus: false,
    };
    if (this.spellMana - this.totalMana <= 0) {
      checkSpellOutcome = {
        spellStatus: true,
      };
    } else {
      checkSpellOutcome = {
        spellStatus: false,
      };
    }
    return checkSpellOutcome;
  }

  useSpell(player, enemy) {
    let spellOutcome = {
      spellName: "",
      spellDamage: 0,
      damage: 0,
    };
    if (player.spellName === "fireball") {
      spellOutcome = {
        spellName: "Spell of FireBall",
        spellDamage: 250,
        damage: enemy.hp - 250,
      };
    }
    return spellOutcome;
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
  const spell = cart.filter((item) => item.type === "Spell");
  const spellManaCost = spell[0] ? spell[0].manaCost : 0;
  const spellName = spell[0] ? spell[0].spellName : "noSpell";

  //returns the total in an object
  return {
    hp,
    atk,
    mana,
    spellManaCost,
    spellName,
  };
}
