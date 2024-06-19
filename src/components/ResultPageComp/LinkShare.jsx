import { useEffect } from 'react';

const LinkShare = () => {
  const url = 'https://YeoGiYeo.com';
  const text = '배포할 내용';
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
  };

  const handleClick = (platform) => {
    if (platform === 'kakao') {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(`${import.meta.env.VITE_KAKAO_SHARE_KEY}`); // YOUR_APP_KEY를 실제 Kakao 앱 키로 대체하세요
      }
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '여기여',
          description: '음식 추천',
          imageUrl: 'https://i.ibb.co/7Y1CzSW', // 실제 이미지 URL로 대체하세요
          link: {
            mobileWebUrl: url,
            webUrl: url
          }
        }
      });
    } else {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    // Kakao SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(`${import.meta.env.VITE_KAKAO_SHARE_KEY}`); // YOUR_APP_KEY를 실제 Kakao 앱 키로 대체하세요
    }
  }, []);

  return (
    <div>
      <button onClick={() => handleClick('facebook')}>Share on Facebook</button>
      <button onClick={() => handleClick('twitter')}>Share on Twitter</button>
      <button onClick={() => handleClick('kakao')}>Share on KakaoTalk</button>
    </div>
  );
};

export default LinkShare;
