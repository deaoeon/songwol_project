import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 1920px;
    height: 684px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    .FooterContent {
        width: 1350px;
        height: 300px;
        text-align: right;
        font-size: 16px;
        color: #000;
        line-height: 1.8;
        margin-bottom: 20px;
        margin-right: 60px;
        .text1 {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 40px;
            height: 60px;
            border-bottom: 1px solid #88898d;
            font-weight: 500;
        }
        .text2 {
            margin-right: 40px;
            margin-top: 25px;
            height: 40px;
        }
        .text3 {
            margin-right: 40px;
            height: 40px;
            span {
                font-size: 14px;
            }
        }
    }
    .FooterCopyright {
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 40px;
        font-size: 20px;
    }
`;
