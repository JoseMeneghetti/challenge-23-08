import React from 'react';
import {
  MonsterBattleAttributesContainer,
  ProgressBar,
} from './MonsterBattleCard.styled';

interface MonsterBattleAttributesProps {
  label: string;
  value?: number;
}

const MonsterBattleAttributes = ({
  label,
  value,
}: MonsterBattleAttributesProps) => {
  return (
    <MonsterBattleAttributesContainer>
      <span>{label}</span>
      <ProgressBar value={value} variant="determinate" />
    </MonsterBattleAttributesContainer>
  );
};

export default MonsterBattleAttributes;
