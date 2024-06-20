import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import {
  ItemContainer,
  StButtonDiv,
  StCardDiv,
  StContainer,
  StH2,
  StInputContainer
} from '../../styles/SurveyPageStyles/surveyStyle';
import useStore from '../../zustand/store';
import { StartButton } from '../../styles/MainPageStyles/MainPageStyle';

const PeopleStep = ({ prevStep, setPeople, people, cuisineType, mealType }) => {
  const queryClient = useQueryClient();
  const updateFoodSurveyObj = useStore((state) => state.updateFoodSurveyObj);
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: () => supabaseApi.counter.addCount(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['count'] });
    },
    onError: () => {}
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
      navigate('/loading');
    } else {
      Swal.fire({ text: '누구와 함께 식사하실지 선택해주세요!', confirmButtonColor: '#d6eaf8' });
    }
  };

  return (
    <StContainer>
      <StInputContainer>
        <StH2>누구와 함께 식사하세요?</StH2>
        <ItemContainer>
          {[
            { ko: '혼밥', en: 'alone' },
            { ko: '친구', en: 'friends' },
            { ko: '연인', en: 'partner' },
            { ko: '가족모임', en: 'family' }
          ].map((group) => (
            <StCardDiv key={group.en} onClick={() => handleChange(group.en)} $selected={people === group.en}>
              {group.ko}
            </StCardDiv>
          ))}
        </ItemContainer>
        <StButtonDiv>
          <StartButton onClick={prevStep}>이전</StartButton>
          <StartButton onClick={handlePage}>결과페이지로</StartButton>
        </StButtonDiv>
      </StInputContainer>
    </StContainer>
  );
};

export default PeopleStep;
