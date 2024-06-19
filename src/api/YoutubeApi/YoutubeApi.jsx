import axios from 'axios';

const KEY = 'AIzaSyDObMubY2FZvagTcnTgskti5vojx00GlLk';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

export const viewVideos = async (query) => {
  const response = await youtube.get('/search', {
    params: {
      part: 'snippet',
      q: query,
      maxResults: 5,
      type: 'video',
      key: KEY
    }
  });
  return response.data.items;
};
