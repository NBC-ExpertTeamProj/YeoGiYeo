import React from 'react';
import { Link } from 'react-router-dom';

const SurveyPage = () => (
  <div>
    <h1>설문 페이지</h1>
    <Link to="/">메인 페이지로 이동</Link>
    <br />
    <Link to="/result">결과 페이지로 이동</Link>
  </div>
);

export default SurveyPage;
