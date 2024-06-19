import React, { useState } from 'react';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';

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

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const result = await viewVideos(query);
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
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <button type="submit">검색</button>
        </form>
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
      </div>
      <div>mapapi</div>
    </>
  );
};

export default ResultPage;
