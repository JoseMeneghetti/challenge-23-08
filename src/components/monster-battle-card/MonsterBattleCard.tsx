import { Monster } from '../../models/interfaces/monster.interface';
import MonsterBattleAttributes from './MonsterBattleAttributes';
import {
  BattleMonsterCard,
  BattleMonsterImg,
  BattleMonsterTitle,
  MonsterBattleContainer,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard centralized={monster?.id ? false : true}>
      {monster && <BattleMonsterImg src={monster?.imageUrl} />}
      <BattleMonsterTitle hasMonster={monster?.id ? true : false}>
        {title!}
      </BattleMonsterTitle>
      {monster && (
        <MonsterBattleContainer>
          <MonsterBattleAttributes label="HP" value={monster?.hp} />
          <MonsterBattleAttributes label="Attack" value={monster?.attack} />
          <MonsterBattleAttributes label="Defense" value={monster?.defense} />
          <MonsterBattleAttributes label="Speed" value={monster?.speed} />
        </MonsterBattleContainer>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
