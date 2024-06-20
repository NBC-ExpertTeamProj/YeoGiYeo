import { useEffect } from 'react';

const KakaoMap = ({ foodName }) => {
  useEffect(() => {
    console.log('Kakao API Key:', import.meta.env.VITE_KAKAO_API_KEY); // 환경 변수 확인용 콘솔 로그
    const createMap = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              const mapContainer = document.getElementById('map');
              const mapOption = {
                center: new kakao.maps.LatLng(lat, lng),
                level: 3
              };
              const map = new kakao.maps.Map(mapContainer, mapOption);
              const ps = new kakao.maps.services.Places();
              const infowindow = new kakao.maps.InfoWindow({
                zIndex: 1,
                removable: true, // 닫기 버튼 추가
                maxWidth: 250 // 최대 너비 설정
              });

              // 사용자 위치 마커 추가
              const userMarker = new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(lat, lng),
                title: '현재 위치'
              });

              const userMarkerContent = `
                <div style="padding:5px;font-size:14px;">
                  <strong>현재 위치</strong>
                </div>
              `;

              const userInfowindow = new kakao.maps.InfoWindow({
                content: userMarkerContent,
                removable: true
              });

              kakao.maps.event.addListener(userMarker, 'click', () => {
                userInfowindow.open(map, userMarker);
              });

              const callback = (data, status) => {
                if (status === kakao.maps.services.Status.OK) {
                  data.forEach((place) => {
                    const marker = new kakao.maps.Marker({
                      map,
                      position: new kakao.maps.LatLng(place.y, place.x)
                    });

                    const content = `
                      <div style="padding:10px;font-size:14px;max-width:230px;white-space:normal;">
                        <strong>${place.place_name}</strong><br />
                        ${place.road_address_name || place.address_name}<br />
                        ${place.phone}<br />
                        <a href="${
                          place.place_url
                        }" target="_blank" style="color:blue;text-decoration:underline;display:block;margin-top:10px;white-space:normal;">상세보기</a>
                      </div>
                    `;

                    kakao.maps.event.addListener(marker, 'click', () => {
                      infowindow.setContent(content);
                      infowindow.open(map, marker);
                    });
                  });
                }
              };

              const options = {
                location: new kakao.maps.LatLng(lat, lng),
                radius: 500 // 반경 500미터
              };

              ps.keywordSearch(foodName, callback, options);

              // 지도 클릭 이벤트 추가
              kakao.maps.event.addListener(map, 'click', () => {
                infowindow.close();
                userInfowindow.close();
              });

              // 줌 컨트롤 추가
              const zoomControl = new kakao.maps.ZoomControl();
              map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

              // 지도 타입 변경 컨트롤 추가
              const mapTypeControl = new kakao.maps.MapTypeControl();
              map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
            },
            (error) => {
              console.error('Geolocation Error:', error);
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      });
    };

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&libraries=services&autoload=false`;
    script.async = true;
    script.onload = createMap;
    document.head.appendChild(script);
  }, [foodName]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default KakaoMap;
