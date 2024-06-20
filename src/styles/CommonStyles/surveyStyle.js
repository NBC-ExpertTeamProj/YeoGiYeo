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
  box-sizing: border-box;
  /* background-image: linear-gradient(to right top, #d6eaf8, #cfe2f3, #c8dbed, #c2d3e8, #bccbe2); */
  background-color: rgb(226 232 240);
  padding: 50px;
  width: 60vw;
  height: 70vh;
  margin: auto;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const StH2 = styled.h2`
  font-size: 25px;
  font-weight: 700;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2); */
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 25px;
  box-sizing: border-box;
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

  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #006cb4;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
export const StCardDiv = styled.div`
  max-height: 130px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  box-sizing: border-box;
  width: 100%;
  height: inherit;
  gap: 30px;
  background-color: ${({ $selected }) => ($selected ? '#e9e9e9' : '#ffffff')};
  color: black;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.5s, transform 0.6s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e9e9e9;
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(-1px);
  }
`;

export const StButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

export const StButtonDiv = styled.div`
  display: flex;
  gap: 25px;

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
