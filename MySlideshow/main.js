"use strict";

{
  // DOMの取得
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main-image");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let indexActive = 0;

  // サムネイルクリック時のイベントリスナー
  thumbnails[1].addEventListener("click", () => {
    indexActive = 1;
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[1].classList.add("active");
  });

  // サムネイルクリック時のイベントリスナー
  thumbnails[0].addEventListener("click", () => {
    indexActive = 0;
    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add("active");
    thumbnails[2].classList.remove("active");
    thumbnails[1].classList.remove("active");
  });

  // サムネイルクリック時のイベントリスナー
  thumbnails[2].addEventListener("click", () => {
    indexActive = 2;
    mainImage.src = thumbnails[2].src;
    thumbnails[0].classList.remove("active");
    thumbnails[2].classList.add("active");
    thumbnails[1].classList.remove("active");
  });

  // 次へボタンのイベントリスナー
  next.addEventListener("click", () => {
    indexActive++;
    if (indexActive > 2) {
      indexActive = 0;
    }
    mainImage.src = thumbnails[indexActive].src;
    // サムネイルのクラス付替
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[indexActive].classList.add("active");
  });

  // 前へボタンのイベントリスナー
  prev.addEventListener("click", () => {
    indexActive--;
    if (indexActive < 0) {
      indexActive = 2;
    }
    mainImage.src = thumbnails[indexActive].src;
    // サムネイルのクラス付替
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[indexActive].classList.add("active");
  });
}
