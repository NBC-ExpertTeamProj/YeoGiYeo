import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';

import {
  Container,
  LogoImage,
  StSpan,
  StSubtitle,
  StTitleName,
  StartButton,
  Subtitle
} from '../../styles/MainPageStyles/MainPageStyle';
import Footer from './Footer';

const MainPage = () => {
  const { data: count } = useQuery({
    queryKey: ['count'],
    queryFn: () => supabaseApi.counter.getCount()
  });

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/survey');
  };

  return (
    <>
      <Container>
        <LogoImage />
        <StTitleName>랜덤 메뉴 추천</StTitleName>
        <StSubtitle>매일 무엇을 먹을지 고민되시나요? 지금 시작해보세요!</StSubtitle>
        <Subtitle>
          현재 총 <StSpan>{count}</StSpan> 명이 메뉴 추천을 받았습니다.
        </Subtitle>
        <StartButton onClick={handleStartClick}>시작</StartButton>
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
