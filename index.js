// 자동 롤링 속도 설정 (단위: 초)
const autoSlideSpeed = 15;

// 이미지 박스 요소 선택
const imgBox = document.getElementById("img-box");

// 자동 롤링 함수 정의
function autoSlide() {
    imgBox.style.animationDuration = `${autoSlideSpeed}s`;
}

// 페이지 로드 시 자동 롤링 시작
window.onload = autoSlide;

// JavaScript 파일 (index.js)

document.addEventListener("DOMContentLoaded", function() {
    // 내비게이션 요소들을 가져옵니다.
    const introductionNav = document.querySelector('.left-nav p:nth-child(1)');
    const biographyNav = document.querySelector('.left-nav p:nth-child(2)');
    const portfolioNav = document.querySelector('.mid-nav p');
    const experienceNav = document.querySelector('.right-nav p:nth-child(1)');
    const projectNav = document.querySelector('.right-nav p:nth-child(2)');

    // 클릭 이벤트 리스너를 추가합니다.
    introductionNav.addEventListener("click", function() {
        scrollToElement('.introduction');
    });

    biographyNav.addEventListener("click", function() {
        scrollToElement('.biography');
    });

    portfolioNav.addEventListener("click", function() {
        scrollToElement('.gamsung');
    });

    experienceNav.addEventListener("click", function() {
        scrollToElement('.experience');
    });

    projectNav.addEventListener("click", function() {
        scrollToElement('.project');
    });
});

// 해당 요소로 스크롤하는 함수를 정의합니다.
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
