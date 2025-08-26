import React from 'react';
import { FooterStyle } from './style';

function Footer() {
    return (
        <FooterStyle>
            <div className="FooterContent">
                <p className="text1">
                    CUSTOMER CENTER 031-964-3456 평일 09:00 ~ 21:00 (토, 일, 공휴일 전화가능)
                </p>
                <p className="text2">
                    사업자등록번호 : 128-30-82326 | 통신판매업 신고번호 : 2007-경기고양-6266 | 주소
                    : 412779 경기도 고양시 덕양구 주교동 사서함 529-4 송월타올1층
                </p>
                <p className="text3">
                    상호명: 송월타올 덕양대리점 | 대표자: 문윤호 ·&nbsp;
                    <span>
                        송월몰에서 제공하는 모든 컨텐츠는 저작권법에 보호받는 저작물로서, 무단으로
                        복제, 배포하는 경우에는 저작권법에 의하여 처벌을 받을 수 있습니다.
                    </span>
                </p>

                <div className="FooterCopyright">Copyright © 2022 송월몰. All rights reserved.</div>
            </div>
        </FooterStyle>
    );
}

export default Footer;
