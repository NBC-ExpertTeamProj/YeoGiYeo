// src/pages/YoutubePage.jsx
import { useState, useEffect, useRef } from 'react';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
import styled from 'styled-components';

const YoutubeSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  overflow: hidden;
`;
const YoutubeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const YoutubeVideoList = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const YoutubeVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 15px;
  cursor: pointer;
  border-radius: 10px;
  width: 220px;
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

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }
`;

const YoutubePage = ({ keyword }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (keyword) handleSearch(keyword);
  }, [keyword]);

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

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <YoutubeSection>
      <YoutubeContainer>
        <ScrollButton className="scroll-button left" onClick={scrollLeft}>
          Left
        </ScrollButton>
        <YoutubeVideoList ref={scrollContainerRef}>
          {videos.map((video) => (
            <YoutubeVideo key={video.id.videoId} onClick={() => handleVideoSelect(video)}>
              <YoutubeTitle>{video.snippet.title}</YoutubeTitle>
              <YoutubeThumbnail src={video.snippet.thumbnails.medium.url} alt={`${video.snippet.title}의 썸네일`} />
            </YoutubeVideo>
          ))}
        </YoutubeVideoList>
        <ScrollButton className="scroll-button right" onClick={scrollRight}>
          Right
        </ScrollButton>
      </YoutubeContainer>

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
    </YoutubeSection>
  );
};

export default YoutubePage;
