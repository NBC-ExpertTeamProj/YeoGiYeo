import React, { useState, useEffect } from 'react';
import KakaoMap from '../../components/ResultPageComp/KakaoMap'; // 지도를 포함한 컴포넌트를 가져옵니다.
import { useNavigate } from 'react-router-dom';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
import { COMPANY, CUISINE_TYPE, MEAL_TIME } from '../../api/supabaseApi/food.api';
import { supabaseApi } from '../../api/supabaseApi/supabase.api';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import useStore from '../../zustand/store';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import useFoodRecommendation from '../../hooks/useFoodRecommendation';

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
      <div>
        <h2>지도</h2>
        {food && <KakaoMap foodName={food.name} />} {/* food.name을 KakaoMap에 전달 */}
      </div>
    </>
  );
};

export default ResultPage;
