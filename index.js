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