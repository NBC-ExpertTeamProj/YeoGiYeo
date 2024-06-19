import React from 'react';
import Swal from 'sweetalert2';
import { StContainer, StH2, ItemContainer, Stdiv, StButton } from '../../styles/CommonStyles/surveyStyle';

const MealTypeStep = ({ nextStep, setMealType, mealType }) => {
  const handleChange = (meal) => {
    setMealType(meal);
  };

  const handleNextStep = () => {
    if (mealType) {
      nextStep();
    } else {
      Swal.fire({ text: '식사 종류를 선택해주세요.', confirmButtonColor: '#3085d6' });
    }
  };

  return (
    <StContainer>
      <StH2>식사 종류를 선택하세요</StH2>
      <ItemContainer>
        {[
          { ko: '점심', en: 'lunch' },
          { ko: '저녁', en: 'dinner' }
        ].map((meal) => (
          <Stdiv key={meal.en} onClick={() => handleChange(meal.en)} $selected={mealType === meal.en}>
            {meal.ko}
          </Stdiv>
        ))}
      </ItemContainer>
      <StButton onClick={handleNextStep}>다음</StButton>
    </StContainer>
  );
};

export default MealTypeStep;
