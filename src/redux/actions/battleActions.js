import * as types from "./actionTypes";

export function updateWinner(status) {
  return {
    type: types.UPDATE_WINNER,
    payload: status,
  };
}

export function updateBattle(battle) {
  return {
    type: types.UPDATE_BATTLE,
    payload: battle,
  };
}

export function clearBattleLog() {
  return {
    type: types.CLEAR_BATTLELOG,
  };
}

export function pushBattleLog(battleAction) {
  return {
    type: types.PUSH_BATTLELOG,
    payload: battleAction,
  };
}
