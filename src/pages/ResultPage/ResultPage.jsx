import { useEffect, useState } from 'react';
import KakaoMap from '../../components/ResultPageComp/KakaoMap';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import useFoodRecommendation from '../../hooks/useFoodRecommendation';
import {
  FoodImage,
  MapContainer,
  RandomSuggestionContainer,
  ResultContainer,
  RetryButton,
  ShareContainer
} from '../../styles/ResultPageStyles/ResultPageStyle';
import YoutubePage from './YoutubePage';

const ResultPage = () => {
  const { food, error, handleRetry, isLoading } = useFoodRecommendation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (food) setQuery(food.name);
  }, [food]);

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
