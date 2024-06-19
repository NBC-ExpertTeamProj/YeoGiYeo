import React from 'react';
import { StContainer, StH2, ItemContainer, Stdiv, StButtonDiv } from '../../styles/CommonStyles/surveyStyle';
import Swal from 'sweetalert2';

const CuisineTypeStep = ({ nextStep, prevStep, setCuisineType, cuisineType }) => {
  const handleChange = (cuisine) => {
    setCuisineType(cuisine);
  };

  const handleNextStep = () => {
    if (cuisineType) {
      nextStep();
    } else {
      Swal.fire({ text: '음식 종류를 선택해주세요.', confirmButtonColor: '#3085d6' });
    }
  };

  return (
    <StContainer>
      <StH2>음식 종류를 선택하세요 </StH2>
      <ItemContainer>
        {[
          { ko: '한식', en: 'korean' },
          { ko: '중식', en: 'chinese' },
          { ko: '일식', en: 'japanese' },
          { ko: '양식', en: 'western' },
          { ko: '아시안', en: 'asia' }
        ].map((cuisine) => (
          <Stdiv key={cuisine.en} onClick={() => handleChange(cuisine.en)} $selected={cuisineType === cuisine.en}>
            {cuisine.ko}
          </Stdiv>
        ))}
      </ItemContainer>
      <StButtonDiv>
        <button onClick={prevStep}>이전</button>
        <button onClick={handleNextStep}>다음</button>
      </StButtonDiv>
    </StContainer>
  );
};

export default CuisineTypeStep;
