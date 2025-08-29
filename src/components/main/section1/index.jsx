import { useEffect, useRef } from 'react';
import { Section1Style } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
    const imgBoxRef = useRef(null);
    const bannerRef = useRef(null);

    useEffect(() => {
        const imgBox = imgBoxRef.current;
        const banner = bannerRef.current;

        if (!imgBox || !banner) return;

        // 초기 상태 설정 (새로고침 시 깜박임 방지)
        gsap.set(imgBox, { width: 1534 });

        // 스크롤 트리거 애니메이션 생성
        const animation = gsap.to(imgBox, {
            width: 1920, // 1534px에서 1920px로 확장
            duration: 1,
            ease: 'none', // 스크롤과 정확히 동기화
            scrollTrigger: {
                trigger: banner, // 트리거 요소
                start: 'top top', // 배너 상단이 뷰포트 상단에 닿을 때 시작
                end: '+=800', // 800px 스크롤할 동안 애니메이션 진행
                scrub: 1, // 스크롤과 부드럽게 동기화 (1은 지연시간)
                pin: true, // 애니메이션 중 요소를 화면에 고정
                pinSpacing: true, // 고정 시 다음 요소와의 간격 유지
                anticipatePin: 1, // 핀 고정 시 부드러운 전환
                invalidateOnRefresh: true, // 새로고침 시 재계산

                // 디버깅용 마커 (개발 중에만 사용)
                // markers: true,

                onUpdate: (self) => {
                    // 애니메이션 진행률에 따른 추가 효과
                    const progress = self.progress;
                    // 필요시 추가 애니메이션 효과 구현 가능
                },

                onToggle: (self) => {
                    // 애니메이션 영역 진입/이탈 시 처리
                    if (self.isActive) {
                        // 애니메이션 영역 진입
                        console.log('Animation started');
                    } else {
                        // 애니메이션 영역 이탈
                        console.log('Animation ended');
                    }
                },
            },
        });

        // 이미지 로드 완료 후 ScrollTrigger 재계산
        const img = imgBox.querySelector('img');
        if (img) {
            const handleImageLoad = () => {
                ScrollTrigger.refresh();
            };

            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        }

        // 윈도우 리사이즈 시 ScrollTrigger 재계산
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 정리
        return () => {
            // 타임라인 제거
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 모든 트리거 제거
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Section1Style>
            <div className="mainbanner" ref={bannerRef}>
                <div className="img-box" ref={imgBoxRef}>
                    <img src="/images/section1/mainbanner.jpeg" alt="메인 배너" />
                    <div className="banner-text">
                        <div className="text1">
                            <img src="/images/icon1.png" alt="아이콘1" />
                        </div>
                        <p className="text2">Organic Cotton</p>
                        <div className="text3">
                            <img src="/images/icon2.png" alt="아이콘2" />
                        </div>
                        <p className="text4">송월타월의 변하지 않는 가치, 새로워진 감각</p>
                    </div>
                    <div className="img-bg"></div>
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;
