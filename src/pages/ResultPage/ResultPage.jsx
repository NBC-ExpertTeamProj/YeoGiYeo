import React, { useState } from 'react';
import LinkShare from '../../components/ResultPageComp/LinkShare';
import RandomSuggestion from '../../components/ResultPageComp/RandomSuggestion';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';

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
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <button type="submit">검색</button>
        </form>
        <div>
          {videos.map((video) => (
            <div key={video.id.videoId} onClick={() => handleVideoSelect(video)}>
              <h3>{video.snippet.title}</h3>
              <img src={video.snippet.thumbnails.medium.url} alt={`${video.snippet.title}의 썸네일`} />
            </div>
          ))}
        </div>
        {selectedVideo && (
          <div>
            <h2>{selectedVideo.snippet.title}</h2>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
            <p>{selectedVideo.snippet.description}</p>
          </div>
        )}
      </div>
      <div>mapapi</div>
    </>
  );
};

export default ResultPage;
