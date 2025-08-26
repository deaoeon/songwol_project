import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 1920px;
    height: 140px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    position: relative;

    .nav-top {
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        height: 20px;

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
            li {
                font-size: 18px;
                list-style: none;
                width: 150px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
        }
    }
`;
