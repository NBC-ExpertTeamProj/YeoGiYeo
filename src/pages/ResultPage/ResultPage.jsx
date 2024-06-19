import { useState, useEffect } from 'react';
import KakaoMap from '../../components/ResultPageComp/KakaoMap';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import useFoodRecommendation from '../../hooks/useFoodRecommendation';
import {
  FoodImage,
  MapContainer,
  RandomSuggestionContainer,
  ResultContainer,
  ShareContainer,
  VideoTitle,
  WatchVideo,
  YoutubeCard,
  YoutubeThumbnail,
  YoutubeTitle,
  YoutubeVideo,
  YoutubeVideoList
} from '../../styles/ResultPageStyles/ResultPageStyle';
import { PositiveButton } from '../../styles/CommonStyles/ButtonStyle';

const ResultPage = () => {
  const { food, error, handleRetry, isLoading } = useFoodRecommendation();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (food) handleSearch(food.name);
  }, [food]);

  const handleSearch = async (keyword) => {
    try {
      const result = await viewVideos(keyword);
      setVideos(result);
      setSelectedVideo(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
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
        <PositiveButton onClick={handleRetry}>다시하기</PositiveButton>
      </ResultContainer>
      <RandomSuggestionContainer>
        <RandomSuggestion />
      </RandomSuggestionContainer>
      <ShareContainer>
        <p>Share this page</p>
        <LinkShare url="https://YeoGiYeo.com" text="오늘의 식사 메뉴를 추천받아 보세요!" />
      </ShareContainer>
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
      <MapContainer>
        <p>추천 받은 메뉴를 파는 곳</p>
        {food && <KakaoMap foodName={food.name} />} {/* food.name을 KakaoMap에 전달 */}
      </MapContainer>
    </>
  );
};

export default ResultPage;
