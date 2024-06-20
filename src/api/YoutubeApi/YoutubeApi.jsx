import axios from 'axios';

const KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

export const viewVideos = async (query) => {
  const response = await youtube.get('/search', {
    params: {
      part: 'snippet',
      q: query,
      maxResults: 10,
      type: 'video',
      key: KEY
    }
  });
  return response.data.items;
};
