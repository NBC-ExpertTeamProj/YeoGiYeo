import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import Logo from '../../assets/YeoGiYeo.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 1s ease-in;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const TitleName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 50px;
  color: #666;
`;

export const StartButton = styled.button`
  width: 200px;
  border-radius: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  border-radius: 15px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); */
`;

const MainPage = () => {
  const {
    data: count,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['count'],
    queryFn: () => supabaseApi.counter.getCount()
  });

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/survey');
  };

  return (
    <Container>
      <LogoImage />
      <StTitleName>랜덤 메뉴 추천</StTitleName>
      <StSubtitle>매일 무엇을 먹을지 고민되시나요? 지금 시작해보세요!</StSubtitle>
      <Subtitle>
        현재 총 <StSpan>{count}</StSpan> 명이 메뉴 추천을 받았습니다.
      </Subtitle>
      <StartButton onClick={handleStartClick}>시작</StartButton>
    </Container>
  );
};

export default MainPage;
const StTitleName = styled(TitleName)`
  margin-bottom: 45px;
  margin-top: 0;
`;
const StSpan = styled.span`
  font-weight: 800;
`;
const StSubtitle = styled(Subtitle)`
  margin-bottom: 10px;
`;
