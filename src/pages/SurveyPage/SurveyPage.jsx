import React, { useState } from 'react';
import MealTypeStep from '../../components/SurveyPageComp/MealTypeStep';
import CuisineTypeStep from '../../components/SurveyPageComp/CuisineTypeStep';
import PeopleStep from '../../components/SurveyPageComp/PeopleStep';
import ProgressBar from '../../components/SurveyPageComp/ProgressBar';
import { PageContainer, StSurveyContainer } from '../../styles/CommonStyles/surveyStyle';
import Loading from '../LoadingPage/LoadingPage';

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
    <PageContainer>
      <ProgressBar step={step} />
      <StSurveyContainer>{steps[step]}</StSurveyContainer>
    </PageContainer>
  );
};

export default SurveyPage;
