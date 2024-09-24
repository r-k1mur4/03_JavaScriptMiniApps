"use strict";

{
  // .thumbnailクラスをDOM取得
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main-image");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  let activeIndex = 0;

  // 0番めのサムネイルをクリックしたときのイベントリスナー
  thumbnails[0].addEventListener("click", () => {
    // クリックしたサムネイルの番号でactiveIndexを更新する
    activeIndex = 0;

    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
  });
  // 1番めのサムネイルをクリックしたときのイベントリスナー
  thumbnails[1].addEventListener("click", () => {
    // クリックしたサムネイルの番号でactiveIndexを更新する
    activeIndex = 1;

    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.add("active");
    thumbnails[2].classList.remove("active");
  });
  // 2番めのサムネイルをクリックしたときのイベントリスナー
  thumbnails[2].addEventListener("click", () => {
    // クリックしたサムネイルの番号でactiveIndexを更新する
    activeIndex = 2;

    mainImage.src = thumbnails[2].src;
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.add("active");
  });

  next.addEventListener("click", () => {
    activeIndex++;
    // 番号が３以上になったら０に戻す
    if (activeIndex > 2) {
      activeIndex = 0;
    }
    mainImage.src = thumbnails[activeIndex].src;
    // 該当のサムネイル画像を明るくする
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[activeIndex].classList.add("active");
  });

  prev.addEventListener("click", () => {
    activeIndex--;
    // 番号が３以上になったら０に戻す
    if (activeIndex < 0) {
      activeIndex = 2;
    }
    mainImage.src = thumbnails[activeIndex].src;
    // 該当のサムネイル画像を明るくする
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[activeIndex].classList.add("active");
  });
}
