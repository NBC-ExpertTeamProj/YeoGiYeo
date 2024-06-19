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
      {[
        { ko: '점심', en: 'lunch' },
        { ko: '저녁', en: 'dinner' }
      ].map((meal) => (
        <Stdiv key={meal.ko}>
          <input
            type="radio"
            id={meal.ko}
            name="mealType"
            value={meal.en}
            checked={mealType === meal.en}
            onChange={handleChange}
          />
          <label htmlFor={meal.ko}>{meal.ko}</label>
        </Stdiv>
      ))}
      <StButton onClick={handleNextStep}>다음</StButton>
    </StContainer>
  );
};

export default MealTypeStep;
