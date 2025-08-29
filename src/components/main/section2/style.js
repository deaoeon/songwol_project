import styled from 'styled-components';

export const Section12Style = styled.section`
    width: 1920px;
    height: auto;
    margin-top: 200px;
    position: relative;
    .img_left {
        width: 1020px;
        img {
            width: 100%;
            object-fit: cover;
            opacity: 0.5;
        }
    }
    .box1 {
        position: absolute;
        top: 487px;
        left: 607px;
        transform: translateY(-50%);
        width: 400px;
        height: auto;
        li {
            list-style: none;
            &:nth-child(1) {
                margin-bottom: 40px;
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
            &:nth-child(2) {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            &:nth-child(3) {
                font-size: 16px;
                line-height: 1.5;
                color: #000;
                white-space: nowrap;
            }
        }
    }
    .box2 {
        position: absolute;
        top: 1397px;
        left: 607px;
        transform: translateY(-50%);
        width: 400px;
        height: auto;
        li {
            list-style: none;
            &:nth-child(1) {
                width: 500px;
                height: 357px;
                margin-bottom: 40px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &:nth-child(2) {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            &:nth-child(3) {
                font-size: 16px;
                color: #000;
                white-space: nowrap;
            }
        }
    }
    .box3 {
        position: absolute;
        top: 776px;
        left: 1227px;
        transform: translateY(-50%);
        width: 400px;
        height: auto;
        li {
            list-style: none;
            &:nth-child(1) {
                width: 500px;
                margin-bottom: 40px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &:nth-child(2) {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            &:nth-child(3) {
                font-size: 16px;
                color: #000;
                white-space: nowrap;
            }
        }
    }
    .box4 {
        position: absolute;
        top: 1510px;
        left: 1227px;
        transform: translateY(-50%);
        width: 400px;
        height: auto;
        li {
            list-style: none;
            &:nth-child(1) {
                width: 500px;
                height: 358px;
                margin-bottom: 40px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &:nth-child(2) {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            &:nth-child(3) {
                font-size: 16px;
                color: #000;
                white-space: nowrap;
            }
        }
    }
    .box5 {
        position: absolute;
        top: 130px;
        left: 1227px;
        transform: translateY(-50%);
        width: 400px;
        height: auto;
        li {
            list-style: none;
            &:nth-child(1) {
                margin-bottom: 40px;
                font-size: 30px;
                font-weight: bold;
            }
            &:nth-child(2) {
                font-size: 20px;
                margin-bottom: 80px;
            }
            &:nth-child(3) {
                width: 170px;
                border-radius: 50px;
                padding: 10px 30px;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                color: #901438;
                border: 1px solid #901438;
                white-space: nowrap;
            }
        }
    }
`;
