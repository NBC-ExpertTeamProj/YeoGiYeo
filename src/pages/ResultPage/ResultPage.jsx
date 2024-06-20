import { useEffect, useState } from 'react';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
import KakaoMap from '../../components/ResultPageComp/KakaoMap';
import { useNavigate } from 'react-router-dom';
import { COMPANY, CUISINE_TYPE, MEAL_TIME } from '../../api/supabaseApi/food.api';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import useStore from '../../zustand/store';
import YoutubePage from './YoutubePage';

import useFoodRecommendation from '../../hooks/useFoodRecommendation';
import {
  FoodImage,
  MapContainer,
  RandomSuggestionContainer,
  ResultContainer,
  RetryButton,
  ShareContainer,
  VideoTitle,
  WatchVideo,
  YoutubeCard,
  YoutubeThumbnail,
  YoutubeTitle,
  YoutubeVideo,
  YoutubeVideoList
} from '../../styles/ResultPageStyles/ResultPageStyle';

const ResultPage = () => {
  const { food, error, handleRetry, isLoading } = useFoodRecommendation();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  const handleSearch = async (keyword) => {
    try {
      const result = await viewVideos(keyword);
      setVideos(result);
      setSelectedVideo(null);
    } catch (isError) {
      setError(error);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleRetry = () => {
    setFood(null);
    setError(null);
    setQuery('');
    window.location.reload();
  };

  return (
    <>
      <ResultContainer>
        <h1>메뉴 추천 결과</h1>
      </ResultContainer>
      <ResultContainer>
        <p>설문 조사 결과 추천 메뉴는...</p>
        {error && <p>Error: {error}</p>}
        {food ? <h1>{food.name}</h1> : <h1>추천할 메뉴가 없습니다.</h1>}
        {food && <FoodImage src={food.image_url} alt={food.name} />}
      </ResultContainer>
      <RandomSuggestionContainer>
        {food && <RandomSuggestion food={food} />}
        <RetryButton onClick={handleRetry}>다시하기</RetryButton>
      </RandomSuggestionContainer>
      <ShareContainer>
        <p>Share this page</p>
        <LinkShare url="https://YeoGiYeo.com" text="오늘의 식사 메뉴를 추천받아 보세요!" />
      </ShareContainer>
      {query && <YoutubePage keyword={query} />}
      <MapContainer>
        <p>추천 받은 메뉴를 파는 곳</p>
        {food && <KakaoMap foodName={food.name} />} {/* food.name을 KakaoMap에 전달 */}
      </MapContainer>
    </>
  );
};

export default ResultPage;
