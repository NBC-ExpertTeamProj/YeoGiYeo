import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import { ItemContainer, StButtonDiv, StContainer, StH2, Stdiv } from '../../styles/CommonStyles/surveyStyle';
import useStore from '../../zustand/store';

const PeopleStep = ({ prevStep, setPeople, people, cuisineType, mealType }) => {
  const queryClient = useQueryClient();
  const updateFoodSurveyObj = useStore((state) => state.updateFoodSurveyObj);
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: () => supabaseApi.counter.addCount(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['count'] });
      alert('성공했어!');
    },
    onError: () => {
      alert('실패했어');
    }
  });

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
      mutate();
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
