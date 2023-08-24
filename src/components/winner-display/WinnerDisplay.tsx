import { WinnerDisplayContainer, WinnerText } from './WinnerDisplay.styled';

type Props = {
  text: string;
  tie: boolean;
};

const WinnerDisplay: React.FC<Props> = ({ text, tie }) => (
  <WinnerDisplayContainer>
    {tie ? (
      <WinnerText>There is a draw!</WinnerText>
    ) : (
      <WinnerText>{text} wins!</WinnerText>
    )}
  </WinnerDisplayContainer>
);

export { WinnerDisplay };
