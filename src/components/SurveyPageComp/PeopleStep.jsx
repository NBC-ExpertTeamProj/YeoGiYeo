import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StContainer, StH2, ItemContainer, Stdiv, StButtonDiv } from '../../styles/CommonStyles/surveyStyle';
import Swal from 'sweetalert2';
import useStore from '../../zustand/store';

const PeopleStep = ({ prevStep, setPeople, people, cuisineType, mealType }) => {
  const updateFoodSurveyObj = useStore((state) => state.updateFoodSurveyObj);
  const navigate = useNavigate();

  const handleChange = (group) => {
    setPeople(group);
  };

  const handlePage = () => {
    if (people && cuisineType && mealType) {
      const surveyData = {
        company: people,
        cuisine_type: cuisineType,
        meal_time: mealType
      };
      updateFoodSurveyObj(surveyData);

      navigate('/Result');
    } else {
      Swal.fire({ text: '식사 인원을 선택해주세요.', confirmButtonColor: '#3085d6' });
    }
  };

  return (
    <StContainer>
      <StH2>몇 명이서 식사하시나요?</StH2>
      <ItemContainer>
        {[
          { ko: '혼밥', en: 'alone' },
          { ko: '친구', en: 'friends' },
          { ko: '연인', en: 'partner' },
          { ko: '가족모임', en: 'family' }
        ].map((group) => (
          <Stdiv key={group.en} onClick={() => handleChange(group.en)} $selected={people === group.en}>
            {group.ko}
          </Stdiv>
        ))}
      </ItemContainer>
      <StButtonDiv>
        <button onClick={prevStep}>이전</button>
        <button onClick={handlePage}>결과페이지로</button>
      </StButtonDiv>
    </StContainer>
  );
};

export default PeopleStep;
