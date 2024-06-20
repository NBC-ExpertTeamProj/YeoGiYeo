import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RobotImg from '../../assets/Robot.jpeg';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 5rem;
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

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const StDiv = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
`;

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToResult = () => {
      navigate('/Result');
    };

    const timeoutId = setTimeout(redirectToResult, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <BackgroundImage src={RobotImg} alt="Loading Background" />
      <StDiv></StDiv>
      <LoadingContainer>
        <span>메</span>
        <span>뉴</span>
        <span>분</span>
        <span>석</span>
        <span>중</span>
        <span>...</span>
      </LoadingContainer>
    </>
  );
};

export default Loading;
