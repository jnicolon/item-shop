export default class magicSpells {
  fireball(character) {
    return character.hp - 250;
  }
}

export const spellsArray = [
  { spellName: "fireball", spell: magicSpells.fireball },
];
