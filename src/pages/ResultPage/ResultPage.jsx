import { useState } from 'react';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
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
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const result = await viewVideos(query);
    setVideos(result);
    setSelectedVideo(null);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const url = 'https://YeoGiYeo.com';
  const text = '배포할 내용';

  return (
    <>
      <div>
        <h2>메뉴 추천 결과</h2>
      </div>
      <div>
        <h3>설문 조사 결과 추천 메뉴는...</h3>
        <p>음식 이름</p>
      </div>
      <div>
        <RandomSuggestion />
      </div>
      <div>
        <h1>Share this page</h1>
        <LinkShare />
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
      </YoutubeCard>
      <div>mapapi</div>
    </>
  );
};

export default ResultPage;
