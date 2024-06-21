# 아웃소싱 프로젝트 : 여기여

## 🏆 기획

**음식 추천 플랫폼**

바쁜 현대사회인들을 위한 음식메뉴 추천 서비스

**`서비스 링크`** : [여기여 서비스 링크](https://yeo-gi-yeo.vercel.app/)

**`피그마 링크`** : [피그마 초안 링크](https://www.figma.com/proto/rPT4L6rMJ6eAcMCKyIFvNY/Untitled?node-id=0-1&t=Kt7qAiS6xYA2iATf-1)

## 🍳 기술 스택

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📂 폴더 구조

<details>
<summary>폴더 구조</summary>
<br>

```

📦src
 ┣ 📂api
 ┃ ┣ 📂KakaoMapApi
 ┃ ┃ ┗ 📜KakaoMap.jsx
 ┃ ┣ 📂supabaseApi
 ┃ ┃ ┣ 📜alcohol.api.js
 ┃ ┃ ┣ 📜counter.api.js
 ┃ ┃ ┣ 📜dessert.api.js
 ┃ ┃ ┣ 📜food.api.js
 ┃ ┃ ┗ 📜supabase.api.js
 ┃ ┗ 📂YoutubeApi
 ┃ ┃ ┗ 📜YoutubeApi.jsx
 ┣ 📂assets
 ┃ ┣ 📜favicon-96x96.png
 ┃ ┣ 📜icon-facebook.png
 ┃ ┣ 📜icon-kakao.png
 ┃ ┣ 📜icon-twitter.png
 ┃ ┣ 📜Robot.jpeg
 ┃ ┣ 📜YeoGiYeo.png
 ┃ ┗ 📜YeoGiYeo_App.png
 ┣ 📂components
 ┃ ┣ 📂ResultPageComp
 ┃ ┃ ┣ 📜LinkShare.jsx
 ┃ ┃ ┣ 📜RandomSuggestion.jsx
 ┃ ┃ ┗ 📜YoutubePage.jsx
 ┃ ┗ 📂SurveyPageComp
 ┃ ┃ ┣ 📜CuisineTypeStep.jsx
 ┃ ┃ ┣ 📜MealTypeStep.jsx
 ┃ ┃ ┣ 📜PeopleStep.jsx
 ┃ ┃ ┗ 📜ProgressBar.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useFoodRecommendation.jsx
 ┣ 📂pages
 ┃ ┣ 📂LoadingPage
 ┃ ┃ ┗ 📜LoadingPage.jsx
 ┃ ┣ 📂MainPage
 ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┣ 📂ResultPage
 ┃ ┃ ┗ 📜ResultPage.jsx
 ┃ ┗ 📂SurveyPage
 ┃ ┃ ┗ 📜SurveyPage.jsx
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┣ 📂CommonStyles
 ┃ ┃ ┣ 📜ButtonStyle.js
 ┃ ┃ ┗ 📜LoadingBarStyle.js
 ┃ ┣ 📂GlobalStyles
 ┃ ┃ ┣ 📜AppStyle.js
 ┃ ┃ ┣ 📜GlobalStyle.js
 ┃ ┃ ┗ 📜Theme.js
 ┃ ┣ 📂LoadingPageStyles
 ┃ ┃ ┗ 📜LoadingPageStyle.js
 ┃ ┣ 📂MainPageStyles
 ┃ ┃ ┗ 📜MainPageStyle.js
 ┃ ┣ 📂ResultPageStyles
 ┃ ┃ ┣ 📜ResultPageStyle.js
 ┃ ┃ ┗ 📜YoutubeStyle.js
 ┃ ┗ 📂SurveyPageStyles
 ┃ ┃ ┗ 📜surveyStyle.js
 ┣ 📂supabase
 ┃ ┗ 📜supabase.js
 ┣ 📂utils
 ┣ 📂zustand
 ┃ ┗ 📜store.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx

```

</details>

## 🧨 트러블 슈팅

<details>
<summary>카카오 지도 API 작동 오류</summary>
<br>

**`문제`** 특정 인원의 컴퓨터에서 카카오 지도가 나타나지 않는 이슈
**`해결`** Kakao Developers 내에서 플랫폼에 프로젝트 도메인 확인 후 제대로 기입하여 해결했음.

</details>

</details>

## 👨‍👩‍👧 구성원

| 역할   | 이름   | 분담                                                      | 깃허브                                          |
| ------ | ------ | --------------------------------------------------------- | ----------------------------------------------- |
| 팀장   | 주현우 | 지도 API 연동 및 발표                                     | https://github.com/HyunwooJu                    |
| 부팀장 | 김준영 | 결과 페이지 + 공유링크 및 css                             | https://github.com/JvnKim                       |
| 팀원   | 강윤서 | 유튜브 API 연동 (설문 결과를 기반으로 검색, 노출, 플레이) | https://github.com/dbsjt                        |
| 팀원   | 이인   | 메인페이지 + supabase (더미데이터 + 연동)                 | https://github.com/LeLu815              |
| 팀원   | 이혜진 | 설문 페이지, 로딩페이지 및 시연 녹화                      | https://github.com/hyejinleeee?tab=repositories |
| 팀원   | 한종섭 | 메인 페이지 + supabase (더미데이터 + 연동)                | https://github.com/hanjongseop                  |
