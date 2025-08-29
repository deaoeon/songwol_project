import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 100%;
    height: auto;
    position: relative;

    .mainbanner {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff; /* 로딩 중 배경색 */
    }

    .img-box {
        position: relative;
        width: 1534px; /* 초기 크기 */
        height: 100vh;
        background-color: #fff;

        /* GSAP 애니메이션 최적화를 위한 속성들 */
        will-change: width; /* 브라우저에게 width 변경 예고 */
        transform: translateZ(0); /* 하드웨어 가속 활성화 */
        backface-visibility: hidden; /* 뒷면 숨김으로 렌더링 최적화 */

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            /* 이미지 렌더링 최적화 */
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        }
    }

    .img-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(148, 147, 147, 0.3);
        z-index: 1;
        pointer-events: none; /* 마우스 이벤트 차단 */
    }

    .banner-text {
        width: 798px;
        color: #fff;
        text-align: center;
        position: absolute;
        z-index: 2;

        /* 텍스트 애니메이션을 위해 추가된 속성들 */
        will-change: transform, scale; /* scale 변경 예고 추가 */
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform-origin: center center; /* 중심점에서 확대/축소 */

        .text1 {
            position: absolute;
            width: 40px;
            left: 50px;
            top: -480px;
            transform: translate(-50%, 50%);
        }

        .text2 {
            display: flex;
            font-size: 100px;
            font-weight: 600;
            margin: 0;
            white-space: nowrap;
            line-height: 1;
            position: absolute;
            top: -535px;
            left: 450px;
            transform: translate(-50%, 50%);
        }

        .text3 {
            position: absolute;
            width: 40px;
            top: -470px;
            left: 810px;
            transform: translate(50%, 50%);
        }

        .text4 {
            position: absolute;
            top: -365px;
            left: 450px;
            transform: translate(-50%, 0);
            font-size: 30px;
            font-weight: 600;
            white-space: nowrap;
        }
    }
`;
