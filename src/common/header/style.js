import styled from 'styled-components';

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 1920px;
    height: 120px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    overflow: hidden; /* 애니메이션 시 요소가 밖으로 나가지 않도록 */

    .nav-top {
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        height: 20px;
        /* GSAP 애니메이션을 위한 초기값 설정 */
        transform: translateY(0);
        opacity: 1;

        ul {
            display: flex;
            justify-content: flex-end;
            padding: 0;
            margin: 0;

            li {
                font-size: 14px;
                list-style: none;
                width: 110px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: background-color 0.2s ease;

                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
    }

    .nav {
        width: 1600px;
        height: 140px;
        margin: 0 auto;
        justify-content: space-between;
        display: flex;
        align-items: center;

        .logo {
            cursor: pointer;
        }

        .menu {
            display: flex;
            padding: 0;
            margin: 0;

            li {
                font-size: 18px;
                list-style: none;
                width: 150px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s ease;
                position: relative;

                &:hover {
                    color: #333;
                }

                &:after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background-color: #333;
                    transition: width 0.3s ease;
                }

                &:hover:after {
                    width: 80%;
                }
            }
        }
    }
`;
