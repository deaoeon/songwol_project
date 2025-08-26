import React from 'react';
import { HeaderStyle } from './style';

function Header() {
    return (
        <HeaderStyle>
            <div className="nav-top">
                <ul>
                    <li>로그인</li>
                    <li>브랜드 카탈로그</li>
                    <li>e-카탈로그</li>
                    <li>인쇄 미리보기</li>
                    <li>송월 뉴스룸</li>
                    <li>검색</li>
                </ul>
            </div>
            <div className="nav">
                <div className="logo">
                    <img src="../../../public/images/header/logo.png" alt="logo" />
                </div>
                <ul className="menu">
                    <li>상품소개</li>
                    <li>매장안내</li>
                    <li>브랜드</li>
                    <li>고객센터</li>
                    <li>회사소개</li>
                    <li>타올쿤</li>
                </ul>
            </div>
        </HeaderStyle>
    );
}

export default Header;
