import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import {
  fetchBattleData,
  fetchMonstersData,
} from '../../reducers/monsters/monsters.actions';
import {
  getBattleWinner,
  selectComputerMonster,
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectComputerMonster);
  const battleWinner = useSelector(getBattleWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  useEffect(() => {}, [selectedMonster]);

  const handleStartBattleClick = () => {
    if (selectedMonster?.id && computerMonster?.id) {
      dispatch(
        fetchBattleData({
          firstMonster: selectedMonster.id,
          secondMonster: computerMonster.id,
        }),
      );
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />
      {battleWinner && (
        <WinnerDisplay tie={battleWinner.tie} text={battleWinner.winner.name} />
      )}
      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={computerMonster?.name || 'Computer'}
          monster={computerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
