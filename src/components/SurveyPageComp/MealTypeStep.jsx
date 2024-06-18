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

const StButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;

const MealTypeStep = ({ nextStep, setMealType, mealType }) => {
  const handleChange = (e) => {
    setMealType(e.target.value);
  };

  const handleNextStep = () => {
    if (mealType) {
      nextStep();
    } else {
      alert('식사 종류를 선택해주세요.');
    }
  };

  return (
    <StContainer>
      <StH2>식사 종류를 선택하세요</StH2>
      {['점심', '저녁'].map((meal) => (
        <Stdiv key={meal}>
          <input
            type="radio"
            id={meal}
            name="mealType"
            value={meal}
            checked={mealType === meal}
            onChange={handleChange}
          />
          <label htmlFor={meal}>{meal}</label>
        </Stdiv>
      ))}
      <StButton onClick={handleNextStep}>다음</StButton>
    </StContainer>
  );
};

export default MealTypeStep;