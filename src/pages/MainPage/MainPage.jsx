import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => (
  <div>
    <h1>메인 페이지</h1>
    <Link to="/survey">설문 페이지로 이동</Link>
    <br />
    <Link to="/result">결과 페이지로 이동</Link>
  </div>
);

export default MainPage;
