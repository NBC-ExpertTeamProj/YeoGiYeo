import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  CenteredContainer,
  LoadingContainer,
  Overlay,
  StDiv,
  StTextContainer
} from '../../styles/LoadingPageStyles/LoadingPageStyle';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToResult = () => {
      navigate('/Result');
    };

    const timeoutId = setTimeout(redirectToResult, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <CenteredContainer>
      <StDiv>
        <BackgroundImage />
        <Overlay />
        <StTextContainer>FoodGpt가 적합한 메뉴를 찾고 있습니다.</StTextContainer>
      </StDiv>

      <LoadingContainer>
        <span>메</span>
        <span>뉴</span>
        <span>분</span>
        <span>석</span>
        <span>중</span>
        <span>...</span>
      </LoadingContainer>
    </CenteredContainer>
  );
};

export default Loading;
