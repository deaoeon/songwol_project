import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HeaderStyle } from './style';

function Header() {
    const navTopRef = useRef(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';

                    if (scrollDirection === 'down' && currentScrollY > 100) {
                        // 아래로 스크롤 시 nav-top 숨기기
                        gsap.to(navTopRef.current, {
                            y: -40,
                            opacity: 0,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    } else if (scrollDirection === 'up' || currentScrollY <= 100) {
                        // 위로 스크롤 시 또는 상단 근처에서 nav-top 보이기
                        gsap.to(navTopRef.current, {
                            y: 0,
                            opacity: 1,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    }

                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderStyle>
            <div className="nav-top" ref={navTopRef}>
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
