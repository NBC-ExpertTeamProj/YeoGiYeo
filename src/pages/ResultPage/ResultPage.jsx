import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
import { COMPANY, CUISINE_TYPE, MEAL_TIME } from '../../api/supabaseApi/food.api';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import useStore from '../../zustand/store';
import styled from 'styled-components';

const YoutubeCard = styled.div`
  margin-top: 20px;
  padding: 20px;
`;
const YoutubeVideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  height: 100%;
`;

const YoutubeVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 15px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 auto;
  width: 220px;
  margin-left: 120px;
`;

const YoutubeTitle = styled.h3`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const YoutubeThumbnail = styled.img`
  margin-top: 10px;
  width: 100%;
`;
const WatchVideo = styled.div`
  margin-top: 20px;
`;
const VideoTitle = styled.h2`
  margin-bottom: 10px;
`;
const ResultPage = () => {
  const [food, setFood] = useState(null);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();
  const foodSurveyObj = useStore((state) => state.foodSurveyObj);

  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log('foodSurveyObj :', foodSurveyObj);
    const fetchData = async () => {
      // loading(true)
      // setTimeout(()=>{})
      try {
        // Ensure required data is present, otherwise navigate to home
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
    if (food) handleSearch(food.name);
  }, [food]);

  const handleSearch = async (keyword) => {
    try {
      const result = await viewVideos(keyword);
      setVideos(result);
      setSelectedVideo(null);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleRetry = () => {
    setFood(null);
    setError(null);
    setVideos([]);
    setQuery('');
    setSelectedVideo(null);

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
      <YoutubeCard>
        <YoutubeVideoList>
          {videos.map((video) => (
            <YoutubeVideo key={video.id.videoId} onClick={() => handleVideoSelect(video)}>
              <YoutubeTitle>{video.snippet.title}</YoutubeTitle>
              <YoutubeThumbnail src={video.snippet.thumbnails.medium.url} alt={`${video.snippet.title}의 썸네일`} />
            </YoutubeVideo>
          ))}
        </YoutubeVideoList>
        {selectedVideo && (
          <WatchVideo>
            <VideoTitle>{selectedVideo.snippet.title}</VideoTitle>
            <iframe
              width="90%"
              height="750"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </WatchVideo>
        )}
      </YoutubeCard>
      <div>mapapi</div>
    </>
  );
};

export default ResultPage;
