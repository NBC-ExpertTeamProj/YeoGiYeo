import Swal from 'sweetalert2';
import {
  ItemContainer,
  StCardDiv,
  StContainer,
  StH2,
  StInputContainer
} from '../../styles/SurveyPageStyles/surveyStyle';
import { StartButton } from '../../styles/MainPageStyles/MainPageStyle';

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
