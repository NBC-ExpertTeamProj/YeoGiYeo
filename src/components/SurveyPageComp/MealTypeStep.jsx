import styled from 'styled-components';
import Swal from 'sweetalert2';

import { ItemContainer, StCardDiv, StContainer, StH2 } from '../../styles/CommonStyles/surveyStyle';

const MealTypeStep = ({ nextStep, setMealType, mealType }) => {
  const handleChange = (meal) => {
    setMealType(meal);
  };

  const handleNextStep = () => {
    if (mealType) {
      nextStep();
    } else {
      Swal.fire({ text: '식사 시간을 선택해주세요!', confirmButtonColor: '#3085d6' });
    }
  };

  return (
    <StContainer>
      <StInputContainer>
        <StH2>언제 식사하시나요?</StH2>
        <ItemContainer>
          {[
            { ko: '점심', en: 'lunch' },
            { ko: '저녁', en: 'dinner' }
          ].map((meal) => (
            <StCardDiv key={meal.en} onClick={() => handleChange(meal.en)} $selected={mealType === meal.en}>
              {meal.ko}
            </StCardDiv>
          ))}
        </ItemContainer>
        <div>
          <StartButton onClick={handleNextStep}>다음</StartButton>
        </div>
      </StInputContainer>
    </StContainer>
  );
};

export default MealTypeStep;

export const StInputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;
export const StartButton = styled.button`
  box-sizing: border-box;
  width: 200px;
  height: 45px !important;
  border-radius: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(-1px);
  }
`;
