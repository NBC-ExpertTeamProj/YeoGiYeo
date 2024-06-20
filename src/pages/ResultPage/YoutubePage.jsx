import { useState, useEffect, useRef } from 'react';
import { viewVideos } from '../../api/YoutubeApi/YoutubeApi';
import {
  YoutubeSection,
  WatchVideo,
  YoutubeThumbnail,
  YoutubeTitle,
  YoutubeVideo,
  YoutubeVideoList,
  ScrollButton,
  YoutubeContainer,
  ArrowLeft,
  ArrowRight
} from '../../styles/CommonStyles/YoutubeStyle';

const YoutubePage = ({ keyword }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (keyword) handleSearch(keyword + '먹방');
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
    scrollContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <YoutubeSection>
      <YoutubeContainer>
        <ScrollButton className="scroll-button left" onClick={scrollLeft}>
          <ArrowLeft></ArrowLeft>
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
          <ArrowRight></ArrowRight>
        </ScrollButton>
      </YoutubeContainer>

      {selectedVideo && (
        <WatchVideo>
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
