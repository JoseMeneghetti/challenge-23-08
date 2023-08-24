import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleData = createAsyncThunk(
  'monsters/fetchBattleData',
  async ({
    firstMonster,
    secondMonster,
  }: {
    firstMonster: string;
    secondMonster: string;
  }) => {
    const response = await MonsterService.getBattleWinner(
      firstMonster,
      secondMonster,
    );

    console.log(response);

    return response;
  },
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);
