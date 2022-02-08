import React, { useState } from 'react';
import { CustomOverlayMap, MapMarker, useMap } from 'react-kakao-maps-sdk';

const EventMarkerContainer = ({ position, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(content);

  return (
    <>
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={() => setIsVisible(true)}
      />
      {isVisible && (
        <CustomOverlayMap
          position={position}
          style={{
            width: '300px',
            transform: 'translate(-20px, -100px)',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0px 1px 2px #888',
          }}
        >
          <div className="wrap">
            <div className="info">
              <div
                className="title"
                style={{
                  backgroundColor: '#73D13D',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 5px',
                  borderTopRightRadius: '5px',
                  borderTopLeftRadius: '5px',
                }}
              >
                카카오 스페이스닷원
                <div
                  className="close"
                  onClick={() => setIsVisible(false)}
                  title="닫기"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z"
                      fill="#757575"
                      fill-opacity="0.45"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="body"
                style={{
                  display: 'flex',
                  padding: '5px',
                }}
              >
                <div className="img">
                  <img
                    src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                    alt="카카오 스페이스닷원"
                    style={{
                      width: '73px',
                      height: '70px',
                      paddingRight: '5px',
                    }}
                  />
                </div>
                <div className="desc">
                  <div
                    className="ellipsis"
                    style={{
                      fontSize: '12px',
                    }}
                  >
                    제주특별자치도 제주시 첨단로 242
                  </div>
                  <div
                    className="jibun ellipsis"
                    style={{
                      fontSize: '10px',
                    }}
                  >
                    (우) 63309 (지번) 영평동 2181
                  </div>
                  <div>
                    <a
                      href="https://www.kakaocorp.com/main"
                      target="_blank"
                      className="link"
                      rel="noreferrer"
                      style={{
                        fontSize: '12px',
                      }}
                    >
                      자세히보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
};

export default EventMarkerContainer;
