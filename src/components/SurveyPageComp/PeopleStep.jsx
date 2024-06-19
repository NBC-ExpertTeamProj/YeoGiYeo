import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
  input,
  label {
    cursor: pointer;
  }
`;

const StButtonDiv = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  gap: 5px;
  cursor: pointer;

  button {
    cursor: pointer;
  }
`;

const PeopleStep = ({ prevStep, setPeople, people, cuisineType, mealType }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPeople(e.target.value);
  };

  const handlePage = () => {
    if (people && cuisineType && mealType) {
      const surveyData = {
        company: people,
        cuisine_type: cuisineType,
        meal_time: mealType
      };

      navigate('/Result', { state: { surveyData } });
    } else {
      Swal.fire({ text: '식사 인원을 선택해주세요.', confirmButtonColor: '#3085d6' });
    }
  };

  return (
    <StContainer>
      <StH2>몇 명이서 식사하시나요?</StH2>
      {[
        { ko: '혼밥', en: 'alone' },
        { ko: '친구', en: 'friends' },
        { ko: '연인', en: 'partner' },
        { ko: '가족모임', en: 'family' }
      ].map((group) => (
        <Stdiv key={group.ko}>
          <input
            type="radio"
            id={group.ko}
            name="people"
            value={group.en}
            checked={people === group.en}
            onChange={handleChange}
          />
          <label htmlFor={group.ko}>{group.ko}</label>
        </Stdiv>
      ))}
      <StButtonDiv>
        <button onClick={prevStep}>이전</button>
        <button onClick={handlePage}>결과페이지로</button>
      </StButtonDiv>
    </StContainer>
  );
};

export default PeopleStep;
