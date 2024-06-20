import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RobotImg from '../../assets/Robot.jpeg';

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;
`;

const BackgroundImage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-image: url(${RobotImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  border-radius: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 1) inset;
  -webkit-box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 1) inset;
  -moz-box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 1) inset;
  border-radius: 20px;
`;

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  z-index: 2;
  span {
    animation: animate 3s linear infinite;
    @keyframes animate {
      0%,
      100% {
        color: #ffffff;
        filter: blur(2px);
        text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff, 0 0 80px #00b3ff, 0 0 120px #00b3ff,
          0 0 140px #00b3ff;
      }
      25%,
      75% {
        color: rgba(33, 102, 186, 0);
        filter: blur(0px);
        text-shadow: none;
      }
    }
  }
  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
  }
  span:nth-child(6) {
    animation-delay: 0.5s;
  }
`;

const StDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 1) inset;
  -webkit-box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 1) inset;
  -moz-box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 1) inset;
  border-radius: 20px;
`;

const Loading = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const redirectToResult = () => {
  //     navigate('/Result');
  //   };

  //   const timeoutId = setTimeout(redirectToResult, 3000);

  //   return () => clearTimeout(timeoutId);
  // }, [navigate]);

  return (
    <CenteredContainer>
      <StDiv>
        <BackgroundImage />
        <Overlay />
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
