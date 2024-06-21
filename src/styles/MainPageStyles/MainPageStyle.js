import styled, { keyframes } from 'styled-components';
import Logo from '../../assets/YeoGiYeo.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 1s ease-in;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TitleName = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.large};
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsize.small};
  font-weight: 400;
  margin-bottom: 50px;
  color: #666;
`;

export const StartButton = styled.button`
  width: 200px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontsize.medium};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlueFocus};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const LogoImage = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 40px;
  margin-bottom: 50px;
  border-radius: 15px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); */
`;

export const StTitleName = styled(TitleName)`
  margin-bottom: 45px;
  margin-top: 0;
`;
export const StSpan = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 900 !important;
  color: #3c3c3c;
  margin-left: 3px;
`;
export const StSubtitle = styled(Subtitle)`
  margin-bottom: 10px;
`;
