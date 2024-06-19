import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageContainer = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;

export const StSurveyContainer = styled.div`
  background-color: #d6eaf8;
  padding: 50px;
  width: 60vw;
  height: 70vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  font-size: 20px;

  button {
    padding: 7px;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    background-color: #3498db;
  }
`;

export const StContainer = styled.div`
  position: relative;
  height: 63vh;
`;

export const StH2 = styled.h2`
  background-color: white;
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Stdiv = styled.div`
  gap: 20px;
  background-color: ${({ $selected }) => ($selected ? '#006cb4;' : '#3498d8;')};
  border-radius: 10px;
  width: 90px;
  padding: 6px;
  margin: 9px;
  color: white;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

export const StButtonDiv = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  gap: 5px;

  button {
    cursor: pointer;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 20px auto;
`;

export const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? '#3498db' : '#e0e0df')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;
