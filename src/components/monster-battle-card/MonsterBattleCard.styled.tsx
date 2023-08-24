import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
  gap: '1rem',
}));

export const BattleMonsterTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'hasMonster',
})<{ hasMonster?: boolean }>(({ hasMonster }) => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: !hasMonster ? '2.25rem' : '1.375rem',
  lineHeight: '25.78px',
  color: colors.black,
  width: '100%',
  paddingBottom: '0.5rem',
  borderBottom: hasMonster ? '1px solid #0000001A' : '',
  textAlign: hasMonster ? 'left' : 'center',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const BattleMonsterImg = styled.img(() => ({
  borderRadius: '1rem',
  maxWidth: '283px',
  maxHeight: '178px',
  width: '100%',
  boxShadow: 'box-shadow: 0px 0px 10px 0px #00000040',
}));

export const MonsterBattleContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const MonsterBattleAttributesContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.75rem',
  lineHeight: '14.00px',
}));
