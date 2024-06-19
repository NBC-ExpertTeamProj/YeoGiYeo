import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANY, CUISINE_TYPE, MEAL_TIME } from '../api/supabaseApi/food.api';
import { supabaseApi } from '../api/supabaseApi/supabase.api';
import useStore from '../zustand/store';
import { useQuery } from '@tanstack/react-query';

const useFoodRecommendation = () => {
  const [food, setFood] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const foodSurveyObj = useStore((state) => state.foodSurveyObj);

  const getFoodList = async () => {
    if (!foodSurveyObj.meal_time || !foodSurveyObj.cuisine_type || !foodSurveyObj.company) {
      navigate('/');
      return [];
    }

    const result = await supabaseApi.food.getFoods({
      [MEAL_TIME]: foodSurveyObj.meal_time,
      [CUISINE_TYPE]: foodSurveyObj.cuisine_type,
      [COMPANY]: foodSurveyObj.company
    });
    return result;
  };

  const { data: foods, isLoading } = useQuery({ queryKey: ['foods', foodSurveyObj], queryFn: getFoodList });

  useEffect(() => {
    if (foods && foods.length > 0) {
      const randomFood = foods[Math.floor(Math.random() * foods.length)];
      setFood(randomFood);
    } else {
      setFood(null);
    }
  }, [foods]);

  const handleRetry = () => {
    setFood(null);
    setError(null);
    window.location.reload();
  };

  return {
    food,
    error,
    handleRetry,
    isLoading
  };
};

export default useFoodRecommendation;
