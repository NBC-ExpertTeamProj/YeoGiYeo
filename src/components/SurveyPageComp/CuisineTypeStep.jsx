import Swal from 'sweetalert2';

import styled from 'styled-components';
import { ItemContainer, StButtonDiv, StCardDiv, StContainer, StH2 } from '../../styles/CommonStyles/surveyStyle';
import { StInputContainer, StartButton } from './MealTypeStep';

const CuisineTypeStep = ({ nextStep, prevStep, setCuisineType, cuisineType }) => {
  const handleChange = (cuisine) => {
    setCuisineType(cuisine);
  };

  const handleNextStep = () => {
    if (cuisineType) {
      nextStep();
    } else {
      Swal.fire({ text: '식사 스타일을 선택해주세요!', confirmButtonColor: '#3085d6' });
    }
  };

  return (
    <StContainer>
      <StInputContainer>
        <StH2>어떤 음식을 좋아하세요?</StH2>
        <StItemContainer>
          {[
            { ko: '한식', en: 'korean' },
            { ko: '중식', en: 'chinese' },
            { ko: '일식', en: 'japanese' },
            { ko: '양식', en: 'western' },
            { ko: '아시안', en: 'asia' }
          ].map((cuisine) => (
            <StCardDiv key={cuisine.en} onClick={() => handleChange(cuisine.en)} $selected={cuisineType === cuisine.en}>
              {cuisine.ko}
            </StCardDiv>
          ))}
        </StItemContainer>
        <StButtonDiv>
          <StartButton onClick={prevStep}>이전</StartButton>
          <StartButton onClick={handleNextStep}>다음</StartButton>
        </StButtonDiv>
      </StInputContainer>
    </StContainer>
  );
};

export default CuisineTypeStep;
export const StItemContainer = styled(ItemContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
