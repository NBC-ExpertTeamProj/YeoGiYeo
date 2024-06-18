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
      {[
        { ko: '한식', en: 'korean' },
        { ko: '중식', en: 'chinese' },
        { ko: '일식', en: 'japanese' },
        { ko: '양식', en: 'western' },
        { ko: '아시안', en: 'asia' }
      ].map((cuisine) => (
        <Stdiv key={cuisine.ko}>
          <input
            type="radio"
            id={cuisine.ko}
            name="cuisineType"
            value={cuisine.en}
            checked={cuisine.en === cuisineType}
            onChange={handleChange}
          />
          <label htmlFor={cuisine.ko}>{cuisine.ko}</label>
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
