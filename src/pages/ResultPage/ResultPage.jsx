import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANY, CUISINE_TYPE, MEAL_TIME } from '../../api/supabaseApi/food.api';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import useStore from '../../zustand/store';
import YoutubePage from './YoutubePage';

const ResultPage = () => {
  const [food, setFood] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const foodSurveyObj = useStore((state) => state.foodSurveyObj);

  useEffect(() => {
    console.log('foodSurveyObj :', foodSurveyObj);
    const fetchData = async () => {
      try {
        if (!foodSurveyObj.meal_time || !foodSurveyObj.cuisine_type || !foodSurveyObj.company) {
          navigate('/');
          return;
        }

        const foods = await supabaseApi.food.getFoods({
          [MEAL_TIME]: foodSurveyObj.meal_time,
          [CUISINE_TYPE]: foodSurveyObj.cuisine_type,
          [COMPANY]: foodSurveyObj.company
        });
        console.log(foods);

        if (foods.length > 0) {
          const randomFood = foods[Math.floor(Math.random() * foods.length)];
          setFood(randomFood);
        } else {
          setFood(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [foodSurveyObj.meal_time, foodSurveyObj.cuisine_type, foodSurveyObj.company]);

  useEffect(() => {
    if (food) setQuery(food.name + '먹방');
  }, [food]);

  const handleRetry = () => {
    setFood(null);
    setError(null);
    setQuery('');
    window.location.reload();
  };

  return (
    <>
      <div>
        <h2>메뉴 추천 결과</h2>
      </div>
      <div>
        <h3>설문 조사 결과 추천 메뉴는...</h3>
        {error && <p>Error: {error}</p>}
        {food ? <p>{food.name}</p> : <p>추천할 메뉴가 없습니다.</p>}
        {food && <img src={food.image_url} alt={food.name} />}
        <button onClick={handleRetry}>다시하기</button>
      </div>
      <div>
        <RandomSuggestion />
      </div>
      <div>
        <h1>Share this page</h1>
        <LinkShare url="https://YeoGiYeo.com" text="배포할 내용" />
      </div>
      {query && <YoutubePage keyword={query} />}
      <div>mapapi</div>
    </>
  );
};

export default ResultPage;
