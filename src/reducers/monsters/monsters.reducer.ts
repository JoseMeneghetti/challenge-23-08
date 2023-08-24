import { createReducer } from '@reduxjs/toolkit';
import { IBattle, Monster } from '../../models/interfaces/monster.interface';
import {
  fetchBattleData,
  fetchMonstersData,
  setComputerMonster,
  setSelectedMonster,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
  battleResult: IBattle | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computerMonster: null,
  battleResult: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  // select monster player
  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
    battleResult: null,
  }));

  //select computer monster
  builder.addCase(setComputerMonster, (state, action) => ({
    ...state,
    computerMonster: action.payload,
    battleResult: null,
  }));

  //POST : get battle result.
  builder.addCase(fetchBattleData.pending, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleData.rejected, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleData.fulfilled, (state, action) => ({
    ...state,
    battleResult: action.payload,
  }));
});
