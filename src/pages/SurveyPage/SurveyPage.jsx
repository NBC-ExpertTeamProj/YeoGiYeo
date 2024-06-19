import React, { useState } from 'react';
import MealTypeStep from '../../components/SurveyPageComp/MealTypeStep';
import CuisineTypeStep from '../../components/SurveyPageComp/CuisineTypeStep';
import PeopleStep from '../../components/SurveyPageComp/PeopleStep';
import ProgressBar from '../../components/SurveyPageComp/ProgressBar';
import styled from 'styled-components';

const StSurveyContainer = styled.div`
  background-color: #d6eaf8;
  padding: 50px;
  width: 60vw;
  height: 70vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  font-size: 20px;

  button {
    padding: 7px;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    background-color: #3498db;
  }
`;

const SurveyPage = () => {
  const [step, setStep] = useState(0);
  const [mealType, setMealType] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [people, setPeople] = useState('');

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const steps = [
    <MealTypeStep nextStep={nextStep} setMealType={setMealType} mealType={mealType} />,
    <CuisineTypeStep
      nextStep={nextStep}
      prevStep={prevStep}
      setCuisineType={setCuisineType}
      cuisineType={cuisineType}
    />,
    <PeopleStep
      nextStep={nextStep}
      prevStep={prevStep}
      setPeople={setPeople}
      people={people}
      cuisineType={cuisineType}
      mealType={mealType}
    />
  ];

  return (
    <>
      <ProgressBar step={step} />
      <StSurveyContainer>{steps[step]}</StSurveyContainer>
    </>
  );
};

export default SurveyPage;
