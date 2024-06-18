import React from 'react';
import KakaoMap from './KakaoMap';

const ResultPage = () => {
  const foodName = '떡볶이'; // 설문조사 결과에서 가져온 음식 이름을 여기에 설정

  return (
    <div>
      <h1>추천 메뉴 결과</h1>
      <h2>{foodName}</h2>
      <KakaoMap foodName={foodName} />
    </div>
  );
};

export default ResultPage;
