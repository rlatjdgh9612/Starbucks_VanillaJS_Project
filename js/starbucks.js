// 검색 바 기능
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// input을 클릭했을때 focus를 강제로 적용
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// input 요소에 focus 설정시
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// input 요소에 focus 해제시
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
