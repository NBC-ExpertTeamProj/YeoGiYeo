import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import SurveyPage from '../pages/SurveyPage/SurveyPage';
import ResultPage from '../pages/ResultPage/ResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/Result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
