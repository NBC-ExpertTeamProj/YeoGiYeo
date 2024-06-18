import LinkShare from '../../components/ResultPageComp/LinkShare';

const ResultPage = () => {
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
        <button>음식 이름과 가장 어울리는 디저트는?</button>
        <button>음식 이름과 가장 어울리는 주종은?</button>
      </div>
      <div>
        <h1>Share this page</h1>
        <LinkShare platform={Kakao} url={url} text={text} />
      </div>
      <div>youtubeapi</div>
      <div>mapapi</div>
    </>
  );
};

export default ResultPage;
