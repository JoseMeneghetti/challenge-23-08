import { API_URL } from '../../constants/env';
import { IBattle, Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getBattleWinner = async (
  firstMonster: string | null,
  secondMonster: string | null,
): Promise<IBattle | null> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      monster1Id: firstMonster,
      monster2Id: secondMonster,
    }),
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  getBattleWinner,
};
