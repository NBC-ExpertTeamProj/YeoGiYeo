import React from 'react';
import styled from 'styled-components';

const StContainer = styled.div`
  position: relative;
  height: 63vh;
`;

const StH2 = styled.h2`
  background-color: white;
  margin: 20px;
  padding: 30px;
`;

const Stdiv = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid black;
  padding: 6px;
  margin: 9px;
`;

const StButtonDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 5px;

  button {
    cursor: pointer;
  }
`;

const CuisineTypeStep = ({ nextStep, prevStep, setCuisineType, cuisineType }) => {
  const handleChange = (e) => {
    setCuisineType(e.target.value);
  };

  const handleNextStep = () => {
    if (cuisineType) {
      nextStep();
    } else {
      alert('음식 종류를 선택해주세요.');
    }
  };

  return (
    <StContainer>
      <StH2>음식 종류를 선택하세요 </StH2>
      {['한식', '중식', '일식', '양식', '아시안'].map((cuisine) => (
        <Stdiv key={cuisine}>
          <input
            type="radio"
            id={cuisine}
            name="cuisineType"
            value={cuisine}
            checked={cuisine === cuisineType}
            onChange={handleChange}
          />
          <label htmlFor={cuisine}>{cuisine}</label>
        </Stdiv>
      ))}
      <StButtonDiv>
        <button onClick={prevStep}>이전</button>
        <button onClick={handleNextStep}>다음</button>
      </StButtonDiv>
    </StContainer>
  );
};

export default CuisineTypeStep;
