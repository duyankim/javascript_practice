function scrollAppear() {
  var introText = document.querySelector(".intro-text");
  var introPosition = introText.getBoundingClientRect().top;
  //introText의 위치와 뷰포트의 최상단 위치의 거리차를 알려준다.
  var screenPosition = window.innerHeight / 1.2;
  //뷰포트의 높이를 찾는다. 1.2로 나눈 이유는 뷰포트의 일정 높이로 스크롤 했을 때 나타나게 하기 위함이다.

  if (introPosition < screenPosition) {
    introText.classList.add("intro-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
//스크롤 할 때 효과과 나타나도록 window scroll에 이벤트를 넣는다.
